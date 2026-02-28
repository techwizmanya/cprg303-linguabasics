Status: Accepted
Date: Feb 2026
Context
LinguaBasics must store study categories, phrases, and user progress. The team must decide between local storage and remote database solutions while considering project scope, timeline, and skill level.
Decision
The application will use local device storage using AsyncStorage to persist user progress and study data.
A remote database will not be used in this phase.
Rationale
• Local storage is sufficient for a single-user study planner.
• AsyncStorage is simple and supported in React Native.
• Avoids backend complexity and network dependency.
• Keeps development predictable within course scope.
Data Model
The stored data will include:
• id
• category
• phrase
• meaning
• isCompleted
• createdAt
Consequences
Positive:
• Works offline.
• Easy to implement and test.
• No hosting or backend required.
Negative / Trade-offs:
• Data will not sync across multiple devices.
• Very large datasets may be slower than a database (not expected here).
Alternatives Considered
SQLite
Rejected due to additional setup complexity for this phase.
Firebase / Remote database
Rejected because it introduces unnecessary backend overhead.
