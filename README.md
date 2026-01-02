# BP Wild Jump - Game Platform

A Laravel-based web application for managing a promotional game challenge for BP gas stations. The platform allows users to register, play the "Wild Jump" game, submit scores, and compete in daily and global rankings.

## Features

- **User Authentication**: Registration and login system with email verification
- **Game Integration**: Embedded Wild Jump game with score submission
- **Score Management**: Secure score submission with anti-cheat validation
- **Ranking System**: Daily and global leaderboards
- **Admin Panel**: Filament 4.x-based admin interface for content management
- **Reward System**: Promotional rewards for top players
- **Dynamic Pages**: CMS functionality for managing static pages

## Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18.x and npm
- MySQL/PostgreSQL/SQLite
- Laravel 12.x

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bp-lp
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configure your `.env` file**
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   
   RANKING_API_KEY=your_api_key_here
   ```

6. **Run migrations**
   ```bash
   php artisan migrate
   ```

7. **Seed the database (optional)**
   ```bash
   php artisan db:seed
   ```

8. **Build assets**
   ```bash
   npm run build
   ```

9. **Start the development server**
   ```bash
   php artisan serve
   ```

   Or use the development script:
   ```bash
   composer run dev
   ```

## Configuration

### Environment Variables

Key environment variables to configure:

- `RANKING_API_KEY`: API key for accessing the ranking endpoint (required for API access)
- `APP_URL`: Application URL
- Database configuration variables
- Mail configuration (if using email features)

### Admin Panel

Access the Filament admin panel at `/admin` (default route). You'll need to create an admin user first:

```bash
php artisan make:filament-user
```

## API Documentation

### Base URL

All API endpoints are relative to your application URL.

### Authentication

Some endpoints require authentication via Laravel session cookies or Bearer token.

### Endpoints

#### 1. Get Current User (for Game)

Returns the current authenticated user's name, or "Anonimowy Gracz" (Anonymous Player) if not authenticated.

**Endpoint:** `GET /game/user`

**Authentication:** Optional (session-based)

**Response:**
- **Status:** `200 OK`
- **Content-Type:** `text/plain`
- **Body:** User name or "Anonimowy Gracz"

**Example Request:**
```bash
curl -X GET http://your-domain.com/game/user \
  -H "Cookie: laravel_session=your_session_cookie"
```

**Example Response:**
```
John Doe
```

---

#### 2. Submit Game Score

Submits a game score with validation and anti-cheat measures.

**Endpoint:** `POST /game/score`

**Authentication:** Required (user must be logged in)

**Rate Limiting:** 10 requests per minute

**Request Body:**
```json
{
  "time": 1704067200000,
  "time1": 1704067250000,
  "result": 1500
}
```

**Parameters:**
- `time` (required, string): Start timestamp in milliseconds
- `time1` (required, string): End timestamp in milliseconds
- `result` (required, integer): Game score/points

**Validation Rules:**
- Start timestamp cannot be in the future
- End timestamp must be within 10 seconds of server time
- Minimum 5 seconds between score submissions
- Maximum game duration: 30 minutes
- Maximum points per second: 500
- Minimum game duration: 2 seconds
- For games 5+ minutes with scores 3000+: minimum 50 points/second
- Challenge end date: March 1, 2026 23:59:59

**Response:**
- **Status:** `200 OK` - Score saved successfully
- **Status:** `401 Unauthorized` - User not logged in or challenge ended
- **Status:** `403 Forbidden` - Validation failed (cheating detected)
- **Content-Type:** `text/plain`

**Success Response:**
```
Wynik zapisano poprawnie!
```

**Error Responses:**
```
Zaloguj się
```
```
Wyzwanie już się zakończyło!
```
```
Nie kombinuj
```

**Example Request:**
```bash
curl -X POST http://your-domain.com/game/score \
  -H "Content-Type: application/json" \
  -H "Cookie: laravel_session=your_session_cookie" \
  -H "X-CSRF-TOKEN: your_csrf_token" \
  -d '{
    "time": "1704067200000",
    "time1": "1704067250000",
    "result": 1500
  }'
```

---

#### 3. Get Ranking

Retrieves daily or global game rankings.

**Endpoint:** `GET /api/ranking`

**Authentication:** API Key required

**Query Parameters:**
- `date` (optional, string): Date in `Y-m-d` format (e.g., `2026-01-15`) for daily ranking. If omitted, returns global ranking.
- `api_key` (optional, string): API key (can also be sent via `X-API-Key` header or Bearer token)

**Headers:**
- `X-API-Key`: API key (alternative to query parameter)
- `Authorization: Bearer {api_key}`: Bearer token (alternative to query parameter)

**Response:**
- **Status:** `200 OK` - Success
- **Status:** `400 Bad Request` - Invalid date format
- **Status:** `401 Unauthorized` - Invalid or missing API key
- **Status:** `500 Internal Server Error` - API key not configured
- **Content-Type:** `application/json`

**Global Ranking Response:**
```json
{
  "type": "global",
  "ranking": [
    {
      "place": 1,
      "name": "John Doe",
      "score": 10023,
      "datetime": "14:30:25 15.01.2026"
    },
    {
      "place": 2,
      "name": "Jane Smith",
      "score": 8570,
      "datetime": "16:45:10 15.01.2026"
    }
  ],
  "total": 2
}
```

**Daily Ranking Response:**
```json
{
  "type": "daily",
  "date": "2026-01-15",
  "ranking": [
    {
      "place": 1,
      "name": "John Doe",
      "score": 10023,
      "datetime": "14:30:25 15.01.2026"
    }
  ],
  "total": 1
}
```

**Example Requests:**

Global ranking:
```bash
curl -X GET "http://your-domain.com/api/ranking?api_key=your_api_key"
```

Daily ranking:
```bash
curl -X GET "http://your-domain.com/api/ranking?api_key=your_api_key&date=2026-01-15"
```

With header:
```bash
curl -X GET "http://your-domain.com/api/ranking?date=2026-01-15" \
  -H "X-API-Key: your_api_key"
```

With Bearer token:
```bash
curl -X GET "http://your-domain.com/api/ranking?date=2026-01-15" \
  -H "Authorization: Bearer your_api_key"
```

---

## Database Schema

### Users Table
- `id`: Primary key
- `name`: User's name
- `email`: User's email (unique)
- `password`: Hashed password
- `bpme_card_number`: BPme card number (13 characters, nullable)
- `highscore`: User's highest score (nullable)
- `email_verified_at`: Email verification timestamp
- `remember_token`: Remember me token
- `created_at`, `updated_at`: Timestamps

### Scores Table
- `id`: Primary key
- `user_id`: Foreign key to users table
- `result`: Game score (integer, nullable)
- `start_timestamp`: Game start time
- `end_timestamp`: Game end time
- `duration_ms`: Game duration in milliseconds (nullable)
- `created_at`, `updated_at`: Timestamps
- `deleted_at`: Soft delete timestamp

### Pages Table
- `id`: Primary key
- `slug`: URL slug (unique)
- `title`: Page title
- `content`: Page content (HTML)
- `is_active`: Active status (boolean)
- `created_at`, `updated_at`: Timestamps

## Project Structure

```
bp-lp/
├── app/
│   ├── Filament/          # Filament admin panel resources
│   ├── Http/
│   │   ├── Controllers/   # Application controllers
│   │   └── Requests/      # Form request validators
│   ├── Models/            # Eloquent models
│   └── Providers/         # Service providers
├── database/
│   ├── migrations/        # Database migrations
│   └── seeders/          # Database seeders
├── public/
│   └── game/             # Game assets (Wild Jump)
├── resources/
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   └── views/            # Blade templates
├── routes/
│   ├── web.php           # Web routes
│   └── auth.php          # Authentication routes
└── config/               # Configuration files
```

## Development

### Running Tests

```bash
php artisan test
```

### Code Style

The project uses Laravel Pint for code formatting:

```bash
./vendor/bin/pint
```

### Building Assets

Development mode with hot reload:
```bash
npm run dev
```

Production build:
```bash
npm run build
```

## Security Features

The score submission endpoint includes multiple anti-cheat measures:

1. **Timestamp Validation**: Prevents future timestamps and ensures end time is close to server time
2. **Rate Limiting**: Prevents spam submissions (5-second minimum between submissions)
3. **Duration Validation**: Maximum game duration of 30 minutes
4. **Points Per Second Validation**: Maximum 500 points/second to prevent unrealistic scores
5. **Slow Game Detection**: Detects browser extension slowdowns for long games
6. **Minimum Duration**: Games must last at least 2 seconds

## Challenge Period

The challenge runs from **January 19, 2026** to **March 1, 2026 23:59:59**. Score submissions are blocked after the end date.

## Rewards

- **Guaranteed Reward**: 100 BPme points (for registration and at least one game)
- **Daily Reward**: Coffee/Hot dog coupon for 1 grosz (top 100 in daily ranking)
- **Main Prize**: 150,000 BPme points (worth 1500 PLN) for 1st place in global ranking

## Technologies Used

- **Backend**: Laravel 12.x
- **Frontend**: Blade templates, Tailwind CSS, Alpine.js, AOS (Animate On Scroll)
- **Admin Panel**: Filament 4.x
- **Build Tool**: Vite
- **Database**: MySQL/PostgreSQL/SQLite

## License

This project is proprietary software. All rights reserved.

## Support

For issues or questions, please contact the development team.
