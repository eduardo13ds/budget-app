# Personal Budgeting & Allocation App

A specialized personal financial cashflow application built with high-contrast neo-grotesque visual design, uniform 2px borders, zero drop shadows, and full-bleed pastel color blocking.

## Key Features

1. **Salary Controller & Dynamic Rebalancing**:
   - Set monthly base salary.
   - Dedicate custom percentages (`%`) or dollar amounts (`$`) to each budget area with instantaneous bidirectional synchronization.
   - Real-time multi-segment allocation bar and balance status pill ("100% Fully Balanced", "Unallocated", or "Over-Allocated").

2. **Bank Debts & Long-Overdue Accounts (Area 01)**:
   - Built specifically for old debts with banks and credit providers you haven't paid in a long time.
   - Set monthly settlement allocation funds.
   - Track original balance vs. targeted aggressive settlement offer (e.g. 70% haircut).
   - Dynamic timeline estimator showing how many months until full settlement is achieved.
   - Status cycles: Delinquent, Negotiating, Installment Agreement, Settled.

3. **Fixed Monthly Obligations (Area 02)**:
   - Track recurring non-negotiable living costs: rent, cellphone bill, psychologist sessions, utilities, internet.
   - Due date tracking with payment checkbox and instant month-reset button.
   - Budget vs. Bill discrepancy indicators alerting you if bills exceed allocated salary.

4. **Weekend Discretionary Allowance (Area 03)**:
   - Calculates weekly Friday–Sunday spending caps (Monthly Weekend Fund ÷ ~4 weekends).
   - Log individual weekend expenses with category badges.
   - Live weekend burn-rate meter keeping discretionary spending safe.

5. **Money I Can Keep (Area 04)**:
   - Track accumulated liquid reserves and untouchable emergency cushion.
   - Living runway calculation showing exactly how many months of fixed living costs your liquid cushion covers.
   - Deposit and withdrawal ledger history.

6. **Custom Budget Areas (Area 05)**:
   - Create unlimited custom areas (e.g., Investments, Pets, Education, Side Business).
   - Assign custom % or $ from your salary, select pastel themes, and add line items.

7. **Financial Goals & Milestones (Area 06)**:
   - Define concrete milestones with target amounts, current progress, and target completion dates.
   - Automatic milestone badges (25%, 50%, 75%, Achieved).
   - One-click contribution modal directly transferring money from "Money I Can Keep" into your goals.

8. **Zero Cloud Telemetry & Data Portability**:
   - Everything runs client-side and saves automatically to browser `localStorage`.
   - Export full JSON backup or Import anytime.
   - Pre-loaded with realistic sample data.

---

## How to Run

### Method 1: Python Web Server (Recommended)
Double-click `start.bat` or run:
```powershell
python run_app.py
```
This automatically serves the app on `http://localhost:8080` and opens your default browser.

### Method 2: Direct File Open
You can also directly double-click `index.html` to open it in Chrome, Edge, Firefox, or any modern web browser.

---

## Recommended Workspace Setup
To set this folder as your active workspace in Antigravity or VS Code, open:
`C:\Users\eduardo.srodrigues\.gemini\antigravity\scratch\budget-app`
