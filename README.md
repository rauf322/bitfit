# BitFit - Telegram Workout Tracker

A Telegram Mini App for tracking workouts, built with Next.js 16, React 19, and Tailwind CSS.

## Tech Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Telegram Web App SDK**
- **Bun** (Package Manager)

## Local Development with Telegram

To test this Telegram Mini App locally, you need to expose your localhost to the internet using ngrok.

### Prerequisites

1. Install [Bun](https://bun.sh/) (if not already installed)
2. Install [ngrok](https://ngrok.com/download)
3. Create a Telegram Bot via [@BotFather](https://t.me/botfather)

### Setup Steps

#### 1. Install Dependencies

```bash
bun install
```

#### 2. Start the Development Server

```bash
bun run dev
```

Your app will run on `http://localhost:3000`

#### 3. Start ngrok

In a new terminal window, start ngrok to expose your localhost:

```bash
ngrok http 3000
```

You'll see output like this:

```
Forwarding  https://abc123.ngrok.io -> http://localhost:3000
```

Copy the `https://` URL (e.g., `https://abc123.ngrok.io`)

#### 4. Configure Your Telegram Bot

1. Open [@BotFather](https://t.me/botfather) in Telegram
2. Send `/setmenubutton`
3. Select your bot
4. Paste your ngrok URL (e.g., `https://abc123.ngrok.io`)
5. Send a name for the button (e.g., "Open App")

#### 5. Test Your App

1. Open your bot in Telegram
2. Click the menu button (bottom-left of the chat)
3. Your Next.js app will open inside Telegram!
