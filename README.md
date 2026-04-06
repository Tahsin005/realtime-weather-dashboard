# Real-Time Weather Dashboard

An interactive weather dashboard built with React + TypeScript that combines:

- current weather
- hourly forecast (48 hours)
- daily forecast
- additional atmospheric metrics
- air quality indicators
- an interactive map with weather overlays

The app uses OpenWeather APIs for weather, geocoding, air pollution, and map tile overlays.

## Features

- **Location switching** from a predefined city list
- **Custom location via map click** (sets a "custom" location state)
- **Map overlay layers** (`clouds_new`, `precipitation_new`, `pressure_new`, `wind_new`, `temp_new`)
- **Live legend** that updates with selected map type
- **Current weather card** with local timezone-aware time
- **Hourly + daily forecasts**
- **Additional weather metrics** (clouds, UV index, pressure, sunrise/sunset, wind direction)
- **Air quality side panel** with AQI + pollutant-specific ranges
- **Skeleton loading states** with React Suspense
- **Light/Dark theme toggle** persisted in `localStorage`

## Tech Stack

- **Framework:** React 19 (RC)
- **Build Tool:** Vite 8
- **Language:** TypeScript 5
- **Data fetching/cache:** TanStack Query v5
- **Validation:** Zod
- **Map:** Leaflet + React Leaflet + MapTiler layer + OpenWeather tile overlays
- **Styling/UI:** Tailwind CSS v4 + shadcn/ui-style components
- **Linting:** ESLint 9 + TypeScript ESLint + React Hooks plugin

## Project Structure

```text
src/
	api.ts                         # OpenWeather API calls + schema parsing
	App.tsx                        # Main page composition and UI state
	main.tsx                       # App bootstrap (QueryClient + ThemeProvider)
	components/
		Map.tsx                      # Leaflet map, marker, click handling, overlays
		MapLegend.tsx                # Dynamic legend by selected overlay type
		SidePanel.tsx                # Air quality panel and pollutant cards
		ThemeProvider.tsx            # Dark/light theme state + persistence
		cards/                       # Weather cards (current/hourly/daily/additional)
		dropdowns/                   # Location and map-type selectors
		skeletons/                   # Loading placeholders
	schemas/
		weatherSchema.ts             # Zod schema for onecall weather response
		geocodeSchema.ts             # Zod schema for geocoding response
		airPollutionSchema.ts        # Zod schema for air pollution response
```

## Data Flow (High-level)

1. User selects a city from `LocationDropdown`.
2. `getGeocode(location)` resolves city to lat/lon.
3. `coords` are derived from geocode result, or from map clicks when in `custom` mode.
4. Weather cards query `getWeather(coords)`.
5. Side panel queries `getAirPollution(coords)`.
6. All external responses are parsed with Zod schemas before reaching UI.

## Prerequisites

- Node.js 20+ recommended
- npm

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_OPEN_WEATHER_API_KEY=your_openweather_api_key
VITE_MAPTILER_API_KEY=your_maptiler_api_key
```

Without this key, API requests will fail.

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```