# Project Context

## Purpose
PersonaX is a comprehensive Android application that helps users discover their MBTI (Myers-Briggs Type Indicator) personality type through a 40-question test. The app provides additional features for personality exploration, including a catalog of all 16 personality types, GPT-powered personality analysis, and scenario training for various life situations (romance, job interviews, family conflicts). The app supports 15+ languages and follows modern Android development practices with Jetpack Compose, Material Design 3, and clean architecture principles.

## Tech Stack

### Core Technologies
- **Language**: Kotlin
- **UI Framework**: Jetpack Compose
- **Material Design**: Material Design 3 (Material3)
- **Build System**: Gradle with Kotlin DSL
- **Code Generation**: KSP (Kotlin Symbol Processing)

### Architecture & State Management
- **Architecture Pattern**: MVVM (Model-View-ViewModel)
- **State Management**: StateFlow + ViewModel
- **Dependency Injection**: Hilt (Dagger)
- **Navigation**: Navigation Compose

### Data Layer
- **Local Storage**: DataStore Preferences
- **Data Source**: JSON assets (multilingual question files)
- **Serialization**: Gson

### Backend Services
- **Analytics**: Firebase Analytics
- **Crash Reporting**: Firebase Crashlytics
- **AI Integration**: Firebase AI (Gemini)
- **Background Tasks**: WorkManager

### UI & Media
- **Image Loading**: Coil (with SVG support)
- **Icons**: Material Icons Extended

### Testing
- **Unit Testing**: JUnit 5
- **Mocking**: MockK
- **Flow Testing**: Turbine
- **Coroutines Testing**: kotlinx-coroutines-test

### Android Configuration
- **Min SDK**: 24 (Android 7.0)
- **Target SDK**: 35 (Android 15)
- **Compile SDK**: 36
- **Java Version**: 11

### Additional Libraries
- **In-App Review**: Google Play In-App Review API
- **Work Manager**: AndroidX Work Runtime KTX

## Project Conventions

### Code Style
- **Package Structure**: `com.shanwu.ease.mbti`
- **Naming Conventions**: Follow Kotlin standard conventions
  - Classes: PascalCase (e.g., `MBTIViewModel`, `QuestionRepository`)
  - Functions/variables: camelCase (e.g., `loadQuestions`, `userAnswers`)
  - Constants: UPPER_SNAKE_CASE
- **File Organization**: Group by feature/domain (ui, repository, model, utils, etc.)
- **Dependency Injection**: Use Hilt with `@Inject` constructor injection or field injection with `lateinit var`
- **Coroutines**: Use `viewModelScope` for ViewModels, `lifecycleScope` for Activities
- **State Management**: Use `StateFlow` for reactive state, `MutableStateFlow` for private state holders
- **Comments**: Use KDoc for public APIs, inline comments for complex logic
- **Imports**: Organize imports (Android, third-party, project)

### Architecture Patterns

#### Layered Architecture
1. **UI Layer**: Jetpack Compose screens and components
   - Composable functions for UI
   - State holders (ViewModels) for business logic
   - Navigation handled by Navigation Compose

2. **ViewModel Layer**: 
   - Extends `ViewModel` with `@HiltViewModel`
   - Uses `StateFlow` for state exposure
   - Contains business logic and orchestrates data flow
   - Uses `viewModelScope` for coroutines

3. **Repository Layer**: 
   - Single source of truth for data
   - Abstracts data sources (assets, DataStore, etc.)
   - Returns `Flow` or suspend functions
   - Injected via Hilt

4. **Data Layer**:
   - DataStore for preferences
   - JSON assets for static data (questions, personality types)
   - Firebase services for analytics and AI

5. **Dependency Injection**:
   - Hilt modules in `di/` package
   - `@Module` with `@InstallIn(SingletonComponent::class)`
   - Constructor injection preferred over field injection

#### Navigation Pattern
- Single Activity (`MainActivity`) with Navigation Compose
- Navigation graph defined in `AppNavHost`
- Route-based navigation with type-safe arguments

#### Repository Pattern
- Repositories abstract data sources
- Return `Flow` for reactive data or suspend functions for one-shot operations
- Handle locale-specific data loading (multilingual support)

### Testing Strategy
- **Unit Tests**: Test ViewModels, Repositories, and utility functions
  - Use MockK for mocking dependencies
  - Use Turbine for testing Flows
  - Use `kotlinx-coroutines-test` for coroutine testing
  - Test files in `src/test/java/`
- **Test Coverage**: Focus on core business logic (MBTI calculation, data loading, state management)
- **Test Naming**: Descriptive test names explaining the scenario
- **Mock Strategy**: Mock external dependencies (Context, Firebase, etc.)

### Git Workflow
- **Branching**: Main branch for production-ready code
- **Commits**: Descriptive commit messages
- **Code Review**: Changes should be reviewed before merging
- **Versioning**: Semantic versioning (e.g., 3.5.2) with version codes

## Domain Context

### MBTI Personality System
- **16 Personality Types**: Based on 4 dimensions (E/I, S/N, T/F, J/P)
- **Test Structure**: 40 questions, each with 2 options (A/B)
- **Result Calculation**: Each answer contributes to one of the 4 MBTI dimensions
- **Personality Catalog**: Detailed descriptions for all 16 types with compatibility information

### Multilingual Support
- **Supported Languages**: 15+ languages including English, Chinese (Simplified/Traditional), Japanese, Korean, Spanish, French, German, Italian, Russian, Hindi, Arabic, Turkish, Ukrainian, Vietnamese, Portuguese (Brazilian)
- **Localization**: Questions stored as JSON assets per language (`questions_*.json`)
- **Locale Detection**: Automatic based on device locale with fallback to English

### Features
- **Personality Test**: 40-question MBTI assessment
- **Result Display**: Shows calculated MBTI type with description
- **Types Catalog**: Browse all 16 personality types
- **GPT Analysis**: AI-powered personality analysis using Firebase Gemini
- **Scenario Training**: Practice scenarios for romance, job interviews, and family conflicts
- **Weekly Insights**: Personalized articles based on selected topics and MBTI type
- **Share Functionality**: Share personality results as images
- **In-App Review**: Prompts users for Play Store reviews

## Important Constraints

### Technical Constraints
- **Minimum Android Version**: API 24 (Android 7.0) - limits use of newer Android features
- **ProGuard**: Release builds use code shrinking and obfuscation - requires proper ProGuard rules
- **Offline-First**: App must work offline with local data storage
- **Multilingual Assets**: All question files must be maintained for each supported language
- **Firebase Dependency**: Requires `google-services.json` configuration

### Performance Constraints
- **Asset Loading**: JSON files loaded from assets on-demand
- **Memory**: Large image assets should be optimized (WebP format preferred)
- **Background Work**: Use WorkManager for background tasks to respect battery optimization

### Business Constraints
- **Play Store Compliance**: Must follow Google Play policies
- **Privacy**: User data stored locally (DataStore) - no personal data sent to servers except analytics
- **Analytics**: Firebase Analytics used for user behavior tracking

## External Dependencies

### Firebase Services
- **Firebase Analytics**: User behavior tracking and app analytics
- **Firebase Crashlytics**: Crash reporting and monitoring
- **Firebase AI (Gemini)**: AI-powered personality analysis
- **Configuration**: `google-services.json` required in `app/` directory

### Google Play Services
- **In-App Review API**: For prompting users to rate the app
- **Play Store**: App distribution and updates

### Third-Party Libraries
- **Gson**: JSON serialization/deserialization
- **Coil**: Image loading and caching
- **Hilt**: Dependency injection framework
- **MockK**: Mocking framework for tests
- **Turbine**: Flow testing library

### Build Tools
- **Gradle**: Build automation (Kotlin DSL)
- **KSP**: Kotlin Symbol Processing for code generation
- **Android Gradle Plugin**: Version 8.13.0
