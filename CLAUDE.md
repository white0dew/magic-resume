# CLAUDE.md
 - 务必使用中文注释
 - 随时完善该文档

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `pnpm dev` - Starts Next.js development server on localhost:3000
- **Build**: `pnpm build` - Creates production build
- **Start**: `pnpm start` - Starts production server
- **Lint**: `pnpm lint` - Runs ESLint for code quality checks
- **Package Manager**: Uses `pnpm` (not npm or yarn)

## Architecture Overview

Magic Resume is a modern resume builder built with Next.js 14+ that allows users to create, edit and export professional resumes. The application features a real-time editor with multiple templates and AI-powered enhancements.

### Core Technologies
- **Framework**: Next.js 14+ with App Router
- **State Management**: Zustand with persistence
- **UI Library**: shadcn/ui components built on Radix UI
- **Styling**: Tailwind CSS with custom design system
- **Rich Text**: Tiptap editor for resume content
- **Internationalization**: next-intl (supports zh/en)
- **PDF Generation**: Puppeteer with server-side rendering
- **File System**: Local file synchronization using File System Access API

### Application Structure

#### Route Structure
- `/(public)/[locale]` - Public marketing pages (landing, changelog)
- `/app/dashboard` - Main dashboard with resume management
- `/app/workbench/[id]` - Resume editor interface
- `/api/grammar` - AI grammar checking endpoint  
- `/api/polish` - AI content polishing endpoint
- `/api/proxy/image` - Image proxy for external assets

#### Key Directories
- **`src/components/editor/`** - Resume editing panels and controls
- **`src/components/preview/`** - Resume preview components  
- **`src/components/templates/`** - Resume template layouts (Classic, Modern, Left-Right, Timeline)
- **`src/store/`** - Zustand stores for state management
- **`src/types/`** - TypeScript type definitions
- **`src/i18n/`** - Internationalization configuration and translations

### Data Architecture

#### Resume Data Structure
The main data model is `ResumeData` which contains:
- **Basic Info**: Personal details, contact, photo configuration
- **Sections**: Education, Experience, Projects, Skills, Custom sections
- **Global Settings**: Theme colors, fonts, spacing, layout preferences  
- **Menu Sections**: Configurable section visibility and ordering

#### State Management
- **`useResumeStore`** - Primary store for resume data and operations
- **`useAIConfigStore`** - AI service configuration (OpenAI, Doubao, DeepSeek)
- **`useGrammarStore`** - Grammar checking state
- **File System Sync** - Automatic persistence to local files via File System Access API

#### Template System
Templates are defined in `src/config/templates.ts` with:
- Color schemes and spacing configurations
- Layout preferences (left, center, right alignment)
- Section gap and padding settings
- Component-specific styling rules

### Key Features

#### Real-time Editor
- Live preview updates as users edit content
- Drag-and-drop section reordering
- Rich text editing with Tiptap
- Photo upload and configuration
- Custom field creation

#### AI Integration
- Grammar checking via external AI APIs
- Content polishing and enhancement
- Support for multiple AI providers (OpenAI, Doubao, DeepSeek)

#### Export System
- PDF generation using Puppeteer
- Server-side rendering for accurate layouts
- Support for multiple export formats

#### File Synchronization
- Automatic saving to local file system
- Real-time sync between browser and local files
- Backup and restore capabilities

## Development Notes

### Component Patterns
- Use existing shadcn/ui components before creating custom ones
- Follow the editor/preview pattern for new sections
- Implement proper TypeScript interfaces for new data structures
- Use Zustand store actions for state mutations

### Styling Guidelines
- Custom colors defined in `tailwind.config.ts` (baseFont, subtitleFont, etc.)
- Template-specific styling handled in template components
- Global settings applied through CSS custom properties
- Responsive design using Tailwind breakpoints

### Internationalization
- All user-facing text must be internationalized using next-intl
- Locale files: `src/i18n/locales/zh.json` and `en.json`
- Default locale is Chinese ("zh"), fallback to English ("en")

### AI Integration
- AI endpoints expect specific request/response formats
- Grammar checking highlights errors inline
- Content polishing replaces selected text
- API keys and configurations stored in `useAIConfigStore`

### File System Integration
- Uses modern File System Access API for local file sync
- Automatic permission handling and error recovery
- JSON format for resume data storage
- Files named by resume title with `.json` extension