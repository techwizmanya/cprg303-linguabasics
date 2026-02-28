Status: Accepted
Date: Feb 2026
Context
LinguaBasics is a Study Planner application that helps users learn essential language phrases organized into categories such as greetings, transportation, food, and emergency communication. The application will include multiple screens such as category list, phrase list, and settings. A clear and scalable navigation strategy is required that fits React Native and remains simple for users.
Decision
The application will use React Navigation with the following structure:
• Bottom Tab Navigator for main sections:
o Categories
o Progress
o Settings
• Stack Navigator inside Categories for drill-down flow:
o Category List → Phrase List → Phrase Detail
Rationale
• Bottom tabs provide fast switching between main areas.
• Stack navigation supports natural forward/back behavior.
• React Navigation is well-documented and suitable for the project timeline and team skill level.
• The structure supports future expansion if more study modules are added.
Consequences
Positive:
• Clean and familiar mobile navigation.
• Easy to maintain and extend.
• Works well with React Native ecosystem.
Negative / Trade-offs:
• Requires initial setup and dependency installation.
• Developers must manage route names carefully.
Alternatives Considered
Drawer Navigation only
Rejected because it is slower for frequent switching and unnecessary for a simple planner app.
Single Stack Navigation
Rejected because it does not scale well when the app grows.
