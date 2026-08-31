/**
 * Personal Budgeting Web Application - Core Engine with Supabase Cloud & Bilingual i18n
 * Neo-Grotesque Aesthetic with Zero Shadows, Strict 2px Borders & Pastel Blocking
 */

// Supabase Configuration
const SUPABASE_CONFIG = {
  url: 'https://wlflsiklowpydlcnqsgt.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZmxzaWtsb3dweWRsY25xc2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc5NTEyMDksImV4cCI6MjEwMzUyNzIwOX0.98EsLbg1aW9uFn0OmPqS_r3IuhG7UNlIY6EO08CiqRc',
  defaultProfileId: '00000000-0000-0000-0000-000000000001'
};

// Comprehensive Bilingual Localization Dictionary
const I18N = {
  'pt-BR': {
    // App Header & Branding
    appTitle: 'LEDGER & ALOCAÇÕES',
    appSubtitle: 'Arquitetura Algorítmica de Orçamento Pessoal',
    liveSupabase: 'SALVO',
    syncing: 'SALVANDO...',
    offlineCached: 'OFFLINE SALVO',
    settingsBtn: 'Configurações',
    configSplitsBtn: 'Configurar Recebimentos',
    salarySplitDay: 'Dia {day}',
    salarySplitPercent: '{percent}%',
    salarySplitsTitle: 'Desdobramento do Salário',
    addSplitBtn: '+ Adicionar Parcela',
    splitDayLabel: 'Dia do Mês (ex: 15)',
    splitPercentLabel: 'Porcentagem (%)',
    splitTotalError: 'A soma das parcelas deve ser 100%. Atualmente é {sum}%.',

    sampleDataBtn: 'Dados Exemplo',
    signInSignUp: 'Entrar / Cadastrar',
    logOut: 'Sair',

    // Floating Navigation
    navOverview: 'Visão Geral',
    navDebts: 'Dívidas',
    navFixed: 'Contas Fixas',
    navWeekend: 'Fim de Semana',
    navKeep: 'Reserva',
    navCustom: 'Custom',
    navGoals: 'Metas',
    navSettings: 'Configurações',

    // Hero Overview
    heroBadge: 'ZERO SOMBRAS • SISTEMA DE LINHAS CONCÊNTRICAS',
    heroHeading: 'Arquitetura de Fluxo de Caixa',
    heroDesc: 'Configure seu salário mensal e dedique percentuais ou valores fixos para suas dívidas bancárias antigas, contas fixas, lazer do fim de semana, reserva líquida e metas.',
    salaryLabel: 'SALÁRIO BASE MENSAL',
    netIncomeBadge: 'RENDA LÍQUIDA',
    salaryFrequency: '/ MÊS',
    salaryHint: 'Alterações recalculam e reequilibram automaticamente todas as porcentagens.',
    distributionLabel: 'DISTRIBUIÇÃO DO SALÁRIO',
    allocatedLabel: 'Alocado:',
    remainingLabel: 'Restante:',
    statusBalanced: '100% Totalmente Equilibrado',
    statusUnallocated: 'Não Alocado',
    statusOverallocated: 'Superalocado em',
    legendFixed: 'Contas Fixas',
    legendDebts: 'Dívidas Bancárias',
    legendWeekend: 'Fim de Semana',
    legendKeep: 'Guardar / Reserva',
    legendUnallocated: 'Margem Livre',
    perMonth: '/ mês',

    // Area 01: Bank Debts
    area1Badge: 'ÁREA 01',
    area1Heading: 'Dívidas com Bancos e Contas Atrasadas',
    area1Desc: 'Dívidas bancárias e financeiras que você não paga há muito tempo. Reserve um fundo mensal para propor acordos com descontos agressivos (60% a 85% de abatimento).',
    addDebtBtn: '+ Adicionar Dívida Bancária',
    totalDebtOwed: 'TOTAL DE DÍVIDAS DEVIDAS',
    activeRecordsDb: 'registros ativos no banco Supabase',
    targetSettlementSum: 'VALOR ALVO DE ACORDO',
    expectedSaving: 'Economia esperada:',
    haircutSavings: 'de Desconto Negociado',
    monthlySettlementFund: 'FUNDO MENSAL DE ACORDO',
    canSettleAllIn: 'Quitação total estimada em ~<strong>{months} meses</strong>',
    setBudgetEstimate: 'Defina o orçamento mensal para calcular o prazo',
    delinquentBadge: 'Em atraso ({months}m em aberto)',
    negotiatingBadge: 'Em Negociação de Acordo',
    installmentBadge: 'Parcelamento Acordado',
    settledBadge: 'Paga e Quitada ✓',
    originalLabel: 'Original:',
    targetLabel: 'Alvo:',
    estTimelineLabel: 'TEMPO ESTIMADO',
    statusBtn: 'Status',
    editBtn: 'Editar',
    removeBtn: 'Remover',
    noDebtsMsg: 'Nenhuma dívida cadastrada. Você está livre de dívidas ou ainda não inseriu registros!',
    strategyTipTitle: 'Dica Estratégica de Negociação:',
    strategyTipDesc: 'Para dívidas com mais de 12 a 24 meses de atraso, bancos e credores costumam terceirizar a cobrança. Proponha pagamento único à vista de 20% a 35% do valor original em feirões de renegociação (Serasa Limpa Nome, etc.).',

    // Area 02: Fixed Payments
    area2Badge: 'ÁREA 02',
    area2Heading: 'Pagamentos Fixos Mensais',
    area2Desc: 'Compromissos recorrentes essenciais que não podem faltar: aluguel, plano de celular, psicólogo, internet, convênio de saúde e contas básicas.',
    resetMonthBtn: '↺ Reiniciar Mês',
    addFixedBtn: '+ Adicionar Pagamento Fixo',
    totalFixedBills: 'TOTAL DE CONTAS FIXAS',
    recurringObligations: 'obrigações mensais recorrentes',
    allocatedSalaryBudget: 'ORÇAMENTO ALOCADO DO SALÁRIO',
    bufferLeft: 'sobra de margem',
    exceedsBudget: 'Excede o orçamento em',
    thisMonthProgress: 'PROGRESSO DESTE MÊS',
    billsPaidCounter: '{paid} de {total} Pagas',
    paidLabel: 'Pagas:',
    dueDayLabel: 'Vencimento: dia {day}',
    noFixedMsg: 'Nenhum pagamento fixo cadastrado. Adicione aluguel, celular, psicólogo, etc.',

    // Area 03: Weekend Spending
    area3Badge: 'ÁREA 03',
    area3Heading: 'Gasto Livre para o Fim de Semana',
    area3Desc: 'Dinheiro dedicado estritamente para o lazer de sexta a domingo, restaurantes, bares, passeios e compras sem culpa e sem comprometer sua reserva.',
    addWeekendBtn: '+ Registrar Gasto do Fim de Semana',
    monthlyWeekendPool: 'TOTAL MENSAL DE FIM DE SEMANA',
    dedicatedSalary: 'dedicado do seu salário',
    budgetPerWeekend: 'LIMITE POR FIM DE SEMANA (~4)',
    safeCapWeekend: 'Teto seguro para curtir de sexta a domingo',
    activeWeekendStatus: 'STATUS DO FIM DE SEMANA #{num}',
    leftLabel: 'Restante',
    overLabel: 'Estourado',
    spentOfPool: 'Gasto: {spent} de {budget}',
    weekendTab: 'Fim de Semana #{num}',
    noWeekendExpenses: 'Nenhum gasto registrado para o Fim de Semana #{num}. Aproveite seu descanso dentro do teto de {cap}!',

    // Area 04: Money I Can Keep
    area4Badge: 'ÁREA 04',
    area4Heading: 'Dinheiro para Guardar (Reserva & Poupança)',
    area4Desc: 'Sua reserva líquida intocável de patrimônio. A parcela do salário que fica no seu bolso todo mês, construindo seu tempo de independência financeira.',
    adjustKeepBtn: 'Depositar / Ajustar Reserva',
    totalLiquidKeepReserve: 'RESERVA LÍQUIDA GUARDADA',
    liquidReserveDesc: 'Colchão de segurança e reserva de emergência ao vivo',
    monthlySalaryKeep: 'GUARDADO DO SALÁRIO MENSAL',
    monthlyKeepDesc: 'Adicionado mensalmente ao seu cofre patrimonial',
    essentialRunwayMetric: 'TEMPO DE SOBREVIVÊNCIA (RUNWAY)',
    monthsWord: 'meses',
    runwayDesc: 'Tempo de sobrevivência se sua renda cair a zero',
    recentKeepLedger: 'EXTRATO RECENTE DA RESERVA GUARDADA',
    noKeepRecords: 'Nenhum movimento registrado na reserva ainda.',

    // Area 05: Custom Budget Areas
    area5Badge: 'ÁREA 05',
    area5Heading: 'Áreas Orçamentárias Personalizadas',
    area5Desc: 'Crie qualquer categoria personalizada (investimentos, pets, educação, projetos paralelos) e defina porcentagens ou quantias fixas do seu salário.',
    addCustomAreaBtn: '+ Adicionar Área Personalizada',
    noCustomAreasMsg: 'Nenhuma área personalizada criada ainda. Clique em "+ Adicionar Área Personalizada" para gerenciar investimentos, pets, cursos, etc.',
    customItemsSum: 'Soma dos Itens:',
    customUnassignedBuffer: 'Saldo disponível:',
    customOverAllocated: 'Superalocado em:',
    addItemBtn: '+ Adicionar Item',
    deleteAreaBtn: 'Excluir Área',

    // Area 06: Goals
    area6Badge: 'ÁREA 06',
    area6Heading: 'Metas Financeiras e Conquistas',
    area6Desc: 'Defina metas concretas (reserva de emergência, viagens, computador, quitação de dívidas). Defina quanto guardar por mês com prazos automáticos.',
    createGoalBtn: '+ Criar Nova Meta',
    noGoalsMsg: 'Nenhuma meta financeira criada ainda. Defina objetivos para viagens, emergência, carro novo, etc.',
    goalSavedLabel: 'guardados',
    goalTargetLabel: 'Alvo:',
    goalDoneBadge: '{pct}% Concluído',
    goalAchievedTitle: '🏆 META CONCLUÍDA!',
    goalFinalStretch: '🔥 Reta Final (75%+)',
    goalHalfway: '⚡ Metade do Caminho (50%+)',
    goalMomentum: '🌱 Bom Começo (25%+)',
    goalGettingStarted: 'Iniciando',
    goalEstimateTime: '~<strong>{months} meses</strong> guardando {monthly}/mês',
    goalSetMonthlyKeep: 'Defina o aporte mensal para ver o prazo',
    contributeFundsBtn: '+ Destinar Fundos',

    // Area 07: Settings Section
    settingsAreaBadge: 'SISTEMA',
    settingsAreaHeading: 'Configurações e Parâmetros do App',
    settingsAreaDesc: 'Configure parâmetros do aplicativo, idioma da interface, moeda de exibição, chaves de sincronização na nuvem e dados de exemplo.',
    openModalSettingsBtnText: 'Abrir em Janela Pop-up',

    // Settings Parameters & Labels
    settingsTitle: 'Configurações e Parâmetros',
    settingsLanguageLabel: 'IDIOMA DA INTERFACE (LANGUAGE)',
    settingsCurrencyLabel: 'MOEDA DE EXIBIÇÃO (CURRENCY)',
    settingsProfileKeyLabel: 'CHAVE DE SINCRONIZAÇÃO / ID DO PERFIL',
    settingsProfileKeyHint: 'Cole esta chave em outro dispositivo para abrir exatamente este mesmo orçamento.',
    copyKeyBtn: 'Copiar Chave',
    settingsActionsLabel: 'GERENCIAMENTO DE DADOS',
    saveSettingsBtn: 'Salvar e Aplicar',
    closeSettingsBtn: 'Fechar',
    keyCopiedAlert: 'Chave copiada para a área de transferência!',

    // Footer
    footerTitle: 'LIVRO-CAIXA E ARQUITETURA DE ALOCAÇÕES PESSOAL',
    footerDesc: 'Todos os registros financeiros são armazenados com segurança no armazenamento local do navegador e na nuvem do Supabase.',
    clearDbBtn: 'Limpar Banco Local',
    reloadDemoBtn: 'Recarregar Dados de Exemplo',

    // Modals Common
    cancelBtn: 'Cancelar',
    saveBtn: 'Salvar',
    confirmBtn: 'Confirmar'
  },
  'en': {
    // App Header & Branding
    appTitle: 'LEDGER & ALLOCATIONS',
    appSubtitle: 'Algorithmic Personal Budget Architecture',
    liveSupabase: 'SAVED',
    syncing: 'SAVING...',
    offlineCached: 'OFFLINE CACHED',
    settingsBtn: 'Settings',
    configSplitsBtn: 'Configure Paycheck Splits',
    salarySplitDay: 'Day {day}',
    salarySplitPercent: '{percent}%',
    salarySplitsTitle: 'Salary Split Breakdown',
    addSplitBtn: '+ Add Paycheck Split',
    splitDayLabel: 'Day of Month (e.g. 15)',
    splitPercentLabel: 'Percentage (%)',
    splitTotalError: 'Sum of splits must be exactly 100%. Currently it is {sum}%.',

    sampleDataBtn: 'Sample Data',
    signInSignUp: 'Sign In / Sign Up',
    logOut: 'Log Out',

    // Floating Navigation
    navOverview: 'Overview',
    navDebts: 'Debts',
    navFixed: 'Fixed Bills',
    navWeekend: 'Weekend',
    navKeep: 'Keep Reserve',
    navCustom: 'Custom',
    navGoals: 'Goals',
    navSettings: 'Settings',

    // Hero Overview
    heroBadge: 'ZERO DROP-SHADOWS • CONCENTRIC LINE SYSTEM',
    heroHeading: 'Personal Cashflow Architecture',
    heroDesc: 'Configure your monthly salary and dedicate specific percentage or dollar pools for your old bank debts, fixed living payments, weekend allowance, liquid reserve, and long-term goals.',
    salaryLabel: 'MONTHLY BASE SALARY',
    netIncomeBadge: 'NET INCOME',
    salaryFrequency: '/ MO',
    salaryHint: 'Changes automatically rebalance all assigned percentage allocations.',
    distributionLabel: 'SALARY SPLIT DISTRIBUTION',
    allocatedLabel: 'Allocated:',
    remainingLabel: 'Remaining:',
    statusBalanced: '100% Fully Balanced',
    statusUnallocated: 'Unallocated',
    statusOverallocated: 'Over-Allocated by',
    legendFixed: 'Fixed Bills',
    legendDebts: 'Bank Debts',
    legendWeekend: 'Weekend Spending',
    legendKeep: 'Keep / Savings',
    legendUnallocated: 'Unassigned Pool',
    perMonth: '/ month',

    // Area 01: Bank Debts
    area1Badge: 'AREA 01',
    area1Heading: 'Bank Debts & Long-Overdue Accounts',
    area1Desc: 'Debts with banks and institutions that haven\'t been paid for a long time. Set aside a monthly settlement fund to negotiate aggressive discounts (60%–85% haircut).',
    addDebtBtn: '+ Add Bank Debt',
    totalDebtOwed: 'TOTAL DEBT OWED',
    activeRecordsDb: 'active records in Supabase database',
    targetSettlementSum: 'TARGET SETTLEMENT SUM',
    expectedSaving: 'Expected saving:',
    haircutSavings: 'Haircut / Savings',
    monthlySettlementFund: 'MONTHLY SETTLEMENT FUND',
    canSettleAllIn: 'Can settle all in ~<strong>{months} months</strong>',
    setBudgetEstimate: 'Set monthly budget to estimate timeline',
    delinquentBadge: 'Delinquent ({months}m overdue)',
    negotiatingBadge: 'Negotiating Settlement',
    installmentBadge: 'Installment Plan',
    settledBadge: 'Paid & Settled ✓',
    originalLabel: 'Original:',
    targetLabel: 'Target:',
    estTimelineLabel: 'EST. TIMELINE',
    statusBtn: 'Status',
    editBtn: 'Edit',
    removeBtn: 'Remove',
    noDebtsMsg: 'No debts registered. You are debt free or have not added records yet!',
    strategyTipTitle: 'Negotiation Strategy Tip:',
    strategyTipDesc: 'For debts delinquent past 12–24 months, banks typically assign or write down debt. Propose a single cash lump-sum settlement from your dedicated fund for 20% to 35% of the initial principal during settlement campaigns.',

    // Area 02: Fixed Payments
    area2Badge: 'AREA 02',
    area2Heading: 'Fixed Monthly Obligations',
    area2Desc: 'Recurring commitments you cannot skip: rent, cellphone bill, psychologist sessions, internet, health plan, and utilities.',
    resetMonthBtn: '↺ Reset Month',
    addFixedBtn: '+ Add Fixed Payment',
    totalFixedBills: 'TOTAL FIXED BILLS',
    recurringObligations: 'monthly recurring obligations',
    allocatedSalaryBudget: 'ALLOCATED SALARY BUDGET',
    bufferLeft: 'buffer left',
    exceedsBudget: 'Exceeds budget by',
    thisMonthProgress: 'THIS MONTH\'S PROGRESS',
    billsPaidCounter: '{paid} / {total} Paid',
    paidLabel: 'Paid:',
    dueDayLabel: 'Due day: {day}th',
    noFixedMsg: 'No fixed payments added. Add rent, phone, psychologist, etc.',

    // Area 03: Weekend Spending
    area3Badge: 'AREA 03',
    area3Heading: 'Weekend Discretionary Allowance',
    area3Desc: 'Money dedicated strictly for Friday–Sunday recreation, eating out, drinks, and impulse spending without feeling guilty or touching your savings.',
    addWeekendBtn: '+ Log Weekend Expense',
    monthlyWeekendPool: 'MONTHLY WEEKEND POOL',
    dedicatedSalary: 'dedicated of salary',
    budgetPerWeekend: 'BUDGET PER WEEKEND (~4)',
    safeCapWeekend: 'Safe spending cap for Friday–Sunday',
    activeWeekendStatus: 'ACTIVE WEEKEND #{num} STATUS',
    leftLabel: 'Left',
    overLabel: 'Over',
    spentOfPool: 'Spent: {spent} of {budget}',
    weekendTab: 'Weekend #{num}',
    noWeekendExpenses: 'No expenses logged for Weekend #{num}. Go enjoy your weekend within {cap} cap!',

    // Area 04: Money I Can Keep
    area4Badge: 'AREA 04',
    area4Heading: 'Money I Can Keep (Savings & Reserve)',
    area4Desc: 'Your untouchable liquid store of wealth. This is the portion of your salary that stays in your pocket each month, building up your survival runway.',
    adjustKeepBtn: 'Deposit / Adjust Keep',
    totalLiquidKeepReserve: 'TOTAL LIQUID KEEP RESERVE',
    liquidReserveDesc: 'Live cloud-synced emergency reserve',
    monthlySalaryKeep: 'MONTHLY SALARY KEEP',
    monthlyKeepDesc: 'Added each month to your wealth reservoir',
    essentialRunwayMetric: 'ESSENTIAL RUNWAY METRIC',
    monthsWord: 'months',
    runwayDesc: 'Survival runway if income drops to zero',
    recentKeepLedger: 'RECENT KEEP ACCUMULATION LEDGER',
    noKeepRecords: 'No keep adjustments logged yet.',

    // Area 05: Custom Budget Areas
    area5Badge: 'AREA 05',
    area5Heading: 'Custom Budget Areas',
    area5Desc: 'Create any personalized categories (e.g., Investments, Pets, Education, Side Projects) and assign custom percentages or dollar figures from your salary.',
    addCustomAreaBtn: '+ Add Custom Area',
    noCustomAreasMsg: 'No custom areas created yet. Click "+ Add Custom Area" above to track investments, pets, hobbies, etc.',
    customItemsSum: 'Items Sum:',
    customUnassignedBuffer: 'Unassigned buffer:',
    customOverAllocated: 'Over allocation by:',
    addItemBtn: '+ Add Item',
    deleteAreaBtn: 'Delete Area',

    // Area 06: Goals
    area6Badge: 'AREA 06',
    area6Heading: 'Financial Goals & Milestones',
    area6Desc: 'Define specific milestones (emergency chest, travel, computer, debt settlement buyout). Set how much you must keep monthly to reach the goal, with automatic completion timelines.',
    createGoalBtn: '+ Create New Goal',
    noGoalsMsg: 'No financial goals added yet. Set goals for vacation, emergency, new car, etc.',
    goalSavedLabel: 'saved',
    goalTargetLabel: 'Target:',
    goalDoneBadge: '{pct}% Done',
    goalAchievedTitle: '🏆 GOAL ACHIEVED!',
    goalFinalStretch: '🔥 Final Stretch (75%+)',
    goalHalfway: '⚡ Halfway Mark (50%+)',
    goalMomentum: '🌱 Good Momentum (25%+)',
    goalGettingStarted: 'Getting Started',
    goalEstimateTime: '~<strong>{months} months</strong> at {monthly}/mo',
    goalSetMonthlyKeep: 'Set monthly keep to see timeline',
    contributeFundsBtn: '+ Contribute Funds',

    // Area 07: Settings Section
    settingsAreaBadge: 'SYSTEM',
    settingsAreaHeading: 'App Settings & Parameters',
    settingsAreaDesc: 'Configure application parameters, interface language, display currency, cloud pairing keys, and sample data.',
    openModalSettingsBtnText: 'Open in Popup Modal',

    // Settings Parameters & Labels
    settingsTitle: 'Settings & Parameters',
    settingsLanguageLabel: 'INTERFACE LANGUAGE (IDIOMA)',
    settingsCurrencyLabel: 'CURRENCY FORMAT (MOEDA)',
    settingsProfileKeyLabel: 'DEVICE SYNC KEY / PROFILE ID',
    settingsProfileKeyHint: 'Paste this key into another browser or phone to instantly load and edit this exact same live budget.',
    copyKeyBtn: 'Copy Key',
    settingsActionsLabel: 'DATABASE MANAGEMENT',
    saveSettingsBtn: 'Save & Apply',
    closeSettingsBtn: 'Close',
    keyCopiedAlert: 'Sync Key copied to clipboard!',

    // Footer
    footerTitle: 'PERSONAL CASHFLOW & ALLOCATION LEDGER',
    footerDesc: 'All financial records are stored securely inside your local browser storage and live Supabase cloud database.',
    clearDbBtn: 'Clear Local Database',
    reloadDemoBtn: 'Reload Sample Data',

    // Modals Common
    cancelBtn: 'Cancel',
    saveBtn: 'Save',
    confirmBtn: 'Confirm'
  }
};

// Helper to translate keys
function t(key, params = {}) {
  const lang = state.language || 'pt-BR';
  const dict = I18N[lang] || I18N['pt-BR'];
  let text = dict[key] || I18N['en'][key] || key;
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }
  return text;
}

// Default sample state
const DEFAULT_STATE = {
  language: 'pt-BR', // 'pt-BR' or 'en'
  currency: 'R$',     // 'R$', '$', '€', '£'
  salary: 5000,
  salarySplits: [
    { id: 'split_1', day: 15, percent: 40 },
    { id: 'split_2', day: 31, percent: 60 }
  ],

  allocations: [
    { id: 'fixed', title: 'Contas Fixas', percent: 45, amount: 2250, color: 'bg-pastel-blue', isSystem: true },
    { id: 'debts', title: 'Dívidas Bancárias', percent: 15, amount: 750, color: 'bg-pastel-periwinkle', isSystem: true },
    { id: 'weekend', title: 'Fim de Semana', percent: 16, amount: 800, color: 'bg-pastel-yellow', isSystem: true },
    { id: 'keep', title: 'Dinheiro para Guardar', percent: 24, amount: 1200, color: 'bg-pastel-mint', isSystem: true }
  ],
  customAreas: [],
  debts: [
    {
      id: 'debt_1',
      creditor: 'Banco do Brasil / Cartão Platinum',
      type: 'Credit Card',
      originalBalance: 6500,
      monthsOverdue: 24,
      settlementOfferPercent: 30,
      settlementTargetAmount: 1950,
      status: 'unpaid',
      notes: 'Conta em atraso há 2 anos. Aguardar feirão limpa nome com 70%+ de desconto à vista.'
    },
    {
      id: 'debt_2',
      creditor: 'Santander Limite Cheque Especial',
      type: 'Overdraft',
      originalBalance: 3200,
      monthsOverdue: 16,
      settlementOfferPercent: 35,
      settlementTargetAmount: 1120,
      status: 'negotiating',
      notes: 'Assessoria de cobrança contatada. Proposta de R$ 1.000 em parcela única à vista.'
    },
    {
      id: 'debt_3',
      creditor: 'Financiamento Casas Bahia',
      type: 'Financing',
      originalBalance: 1450,
      monthsOverdue: 30,
      settlementOfferPercent: 25,
      settlementTargetAmount: 362.50,
      status: 'unpaid',
      notes: 'Dívida antiga de loja varejista. Desconto expressivo esperado.'
    }
  ],
  fixedPayments: [
    { id: 'fix_1', name: 'Aluguel & Condomínio', amount: 1450, dueDay: 5, category: 'Housing', isPaid: true, notes: 'Transferência bancária' },
    { id: 'fix_2', name: 'Psicólogo (Sessões Semanais)', amount: 320, dueDay: 10, category: 'Health', isPaid: true, notes: '4 sessões no mês' },
    { id: 'fix_3', name: 'Plano Celular Claro 5G', amount: 65, dueDay: 15, category: 'Telecom', isPaid: false, notes: 'Ligações e dados ilimitados' },
    { id: 'fix_4', name: 'Internet Fibra 600 Mega', amount: 80, dueDay: 18, category: 'Utilities', isPaid: false, notes: 'Vivo Fibra' },
    { id: 'fix_5', name: 'Plano de Saúde & Odonto', amount: 240, dueDay: 20, category: 'Health', isPaid: false, notes: 'Coparticipação' }
  ],
  weekendSpending: {
    monthlyAllocation: 800,
    activeWeekend: 1,
    expenses: [
      { id: 'wk_1', weekendNumber: 1, date: '2026-08-08', description: 'Jantar de Sábado com Amigos', amount: 65, category: 'Dining' },
      { id: 'wk_2', weekendNumber: 1, date: '2026-08-09', description: 'Cinema & Pipoca', amount: 38, category: 'Entertainment' },
      { id: 'wk_3', weekendNumber: 2, date: '2026-08-15', description: 'Café & Brunch de Domingo', amount: 42, category: 'Dining' },
      { id: 'wk_4', weekendNumber: 2, date: '2026-08-16', description: 'Livraria & Café', amount: 35, category: 'Shopping' }
    ]
  },
  keepAccount: {
    accumulatedBalance: 4200,
    history: [
      { id: 'k_1', date: '2026-06-30', type: 'Guarda do Salário Mensal', amount: 1200, note: 'Alocação Salarial Junho' },
      { id: 'k_2', date: '2026-07-31', type: 'Guarda do Salário Mensal', amount: 1200, note: 'Alocação Salarial Julho' },
      { id: 'k_3', date: '2026-08-15', type: 'Transferência para Meta', amount: -400, note: 'Transferido para Reserva de Emergência' }
    ]
  },
  goals: [
    {
      id: 'goal_1',
      title: 'Reserva de Emergência (6 Meses de Vida)',
      targetAmount: 15000,
      currentAmount: 4200,
      monthlyKeepContribution: 500,
      category: 'Safety',
      notes: 'Mantém 6 meses de contas essenciais intocáveis em conta de liquidez diária.'
    },
    {
      id: 'goal_2',
      title: 'Computador Novo de Alta Performance',
      targetAmount: 2500,
      currentAmount: 1650,
      monthlyKeepContribution: 350,
      category: 'Equipment',
      notes: 'PC novo e monitor para trabalho e desenvolvimento.'
    },
    {
      id: 'goal_3',
      title: 'Fundo para Quitação à Vista de Dívidas',
      targetAmount: 3500,
      currentAmount: 1800,
      monthlyKeepContribution: 350,
      category: 'Freedom',
      notes: 'Reserva guardada especificamente para propor acordos de quitação integral com bancos.'
    }
  ]
};

// Storage Keys
const STORAGE_KEY = 'budget_app_state_v1';
const PROFILE_KEY = 'budget_supabase_profile_id';
const LANG_KEY = 'budget_app_language_v1';

// Current active profile ID and user session
let currentProfileId = localStorage.getItem(PROFILE_KEY) || SUPABASE_CONFIG.defaultProfileId;
let currentUser = null;

// State container
let state = loadState();

// Cloud Connection & Realtime Control Flags
let cloudStatus = 'online';
let supabaseClient = null;
let syncDebounceTimer = null;
let isSyncingFromCloud = false;
let isPushingToCloud = false;
let pushCooldownTimer = null;

// Modal auth tab state
let currentAuthTab = 'signin';



// Initialize Supabase Client
async function initSupabase() {
  try {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      
      await checkAuthSession();

      supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (session && session.user) {
          currentUser = session.user;
          currentProfileId = session.user.id;
          localStorage.setItem(PROFILE_KEY, currentProfileId);
        } else {
          currentUser = null;
          currentProfileId = localStorage.getItem(PROFILE_KEY) || SUPABASE_CONFIG.defaultProfileId;
        }
        renderAuthHeader();
        await syncFromSupabase();
      });

      setupRealtimeSubscriptions();
      await syncFromSupabase();
    } else {
      console.warn('Supabase SDK not loaded, running in local cached mode');
      updateCloudStatus('offline');
      renderAuthHeader();
    }
  } catch (e) {
    console.error('Error initializing Supabase client:', e);
    updateCloudStatus('offline');
    renderAuthHeader();
  }
}

// Check active session
async function checkAuthSession() {
  if (!supabaseClient) return;
  try {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    if (error) {
      currentUser = null;
      return;
    }
    if (session && session.user) {
      currentUser = session.user;
      currentProfileId = session.user.id;
      localStorage.setItem(PROFILE_KEY, currentProfileId);
    } else {
      currentUser = null;
    }
    renderAuthHeader();
  } catch (err) {
    currentUser = null;
    renderAuthHeader();
  }
}

// Real-time listener for multi-device sync
function setupRealtimeSubscriptions() {
  if (!supabaseClient) return;

  try {
    supabaseClient
      .channel('public:budget_sync')
      .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
        if (isPushingToCloud || isSyncingFromCloud) {
          return;
        }
        syncFromSupabase(false);
      })
      .subscribe();
  } catch (e) {
    console.warn('Could not subscribe to Realtime channel:', e);
  }
}

// Pull latest data from Supabase Cloud
async function syncFromSupabase(showLoading = true) {
  if (!supabaseClient) return;
  if (showLoading) updateCloudStatus('syncing');

  isSyncingFromCloud = true;
  try {
    const { data: profile, error: profErr } = await supabaseClient
      .from('budget_profiles')
      .select('*')
      .eq('id', currentProfileId)
      .maybeSingle();

    if (profErr) throw profErr;

    if (!profile) {
      await syncToSupabase();
      updateCloudStatus('online');
      isSyncingFromCloud = false;
      return;
    }

    const [debtsRes, fixedRes, weekendRes, keepRes, goalsRes, customRes] = await Promise.all([
      supabaseClient.from('debts').select('*').eq('profile_id', currentProfileId),
      supabaseClient.from('fixed_payments').select('*').eq('profile_id', currentProfileId),
      supabaseClient.from('weekend_expenses').select('*').eq('profile_id', currentProfileId),
      supabaseClient.from('keep_history').select('*').eq('profile_id', currentProfileId).order('date', { ascending: true }),
      supabaseClient.from('goals').select('*').eq('profile_id', currentProfileId),
      supabaseClient.from('custom_areas').select('*').eq('profile_id', currentProfileId)
    ]);

    state.currency = profile.currency || state.currency || 'R$';
    state.salary = Number(profile.salary) || 0;
    state.salarySplits = Array.isArray(profile.salary_splits) && profile.salary_splits.length > 0
      ? profile.salary_splits 
      : DEFAULT_STATE.salarySplits;

    state.allocations = Array.isArray(profile.allocations) && profile.allocations.length > 0
      ? profile.allocations 
      : DEFAULT_STATE.allocations;
    state.keepAccount.accumulatedBalance = Number(profile.keep_balance) || 0;
    state.weekendSpending.activeWeekend = profile.active_weekend || 1;

    if (debtsRes.data) {
      state.debts = debtsRes.data.map(d => ({
        id: d.id,
        creditor: d.creditor,
        type: d.type,
        originalBalance: Number(d.original_balance),
        monthsOverdue: d.monthsOverdue || d.months_overdue,
        settlementOfferPercent: Number(d.settlement_offer_percent),
        settlementTargetAmount: Number(d.settlement_target_amount),
        status: d.status,
        notes: d.notes || ''
      }));
    }

    if (fixedRes.data) {
      state.fixedPayments = fixedRes.data.map(f => ({
        id: f.id,
        name: f.name,
        amount: Number(f.amount),
        dueDay: f.due_day,
        category: f.category,
        isPaid: Boolean(f.is_paid),
        notes: f.notes || ''
      }));
    }

    if (weekendRes.data) {
      state.weekendSpending.expenses = weekendRes.data.map(w => ({
        id: w.id,
        weekendNumber: w.weekend_number,
        date: w.date,
        description: w.description,
        category: w.category,
        amount: Number(w.amount)
      }));
    }

    if (keepRes.data) {
      state.keepAccount.history = keepRes.data.map(k => ({
        id: k.id,
        date: k.date,
        type: k.type,
        amount: Number(k.amount),
        note: k.note || ''
      }));
    }

    if (goalsRes.data) {
      state.goals = goalsRes.data.map(g => ({
        id: g.id,
        title: g.title,
        targetAmount: Number(g.target_amount),
        currentAmount: Number(g.current_amount),
        monthlyKeepContribution: Number(g.monthly_keep_contribution),
        category: g.category,
        notes: g.notes || ''
      }));
    }

    if (customRes.data) {
      state.customAreas = customRes.data.map(c => ({
        id: c.id,
        name: c.name,
        description: c.description || '',
        color_bg: c.color_bg || 'bg-pastel-gray',
        items: c.items || []
      }));
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    recalculateAllocations();
    renderApp();
    updateCloudStatus('online');
  } catch (err) {
    console.error('Error fetching data from Supabase:', err);
    updateCloudStatus('offline');
  } finally {
    isSyncingFromCloud = false;
  }
}

// Push local state to Supabase Cloud
async function syncToSupabase() {
  if (!supabaseClient) return;
  updateCloudStatus('syncing');

  isPushingToCloud = true;
  if (pushCooldownTimer) clearTimeout(pushCooldownTimer);

  try {
    const profilePayload = {
      id: currentProfileId,
      currency: state.currency,
      salary: Number(state.salary),
      salary_splits: state.salarySplits || [],

      allocations: state.allocations,
      keep_balance: Number(state.keepAccount.accumulatedBalance),
      active_weekend: state.weekendSpending.activeWeekend || 1,
      updated_at: new Date().toISOString()
    };

    const { error: profErr } = await supabaseClient
      .from('budget_profiles')
      .upsert(profilePayload);
    if (profErr) throw profErr;

    const debtsPayload = state.debts.map(d => ({
      id: d.id,
      profile_id: currentProfileId,
      creditor: d.creditor,
      type: d.type,
      original_balance: d.originalBalance,
      months_overdue: d.monthsOverdue,
      settlement_offer_percent: d.settlementOfferPercent,
      settlement_target_amount: d.settlementTargetAmount,
      status: d.status,
      notes: d.notes || ''
    }));
    if (debtsPayload.length > 0) {
      await supabaseClient.from('debts').upsert(debtsPayload);
    }

    const fixedPayload = state.fixedPayments.map(f => ({
      id: f.id,
      profile_id: currentProfileId,
      name: f.name,
      amount: f.amount,
      due_day: f.dueDay,
      category: f.category,
      is_paid: f.isPaid,
      notes: f.notes || ''
    }));
    if (fixedPayload.length > 0) {
      await supabaseClient.from('fixed_payments').upsert(fixedPayload);
    }

    const weekendPayload = state.weekendSpending.expenses.map(w => ({
      id: w.id,
      profile_id: currentProfileId,
      weekend_number: w.weekendNumber,
      date: w.date,
      description: w.description,
      category: w.category,
      amount: w.amount
    }));
    if (weekendPayload.length > 0) {
      await supabaseClient.from('weekend_expenses').upsert(weekendPayload);
    }

    const keepPayload = state.keepAccount.history.map(k => ({
      id: k.id,
      profile_id: currentProfileId,
      date: k.date,
      type: k.type,
      amount: k.amount,
      note: k.note || ''
    }));
    if (keepPayload.length > 0) {
      await supabaseClient.from('keep_history').upsert(keepPayload);
    }

    const goalsPayload = state.goals.map(g => ({
      id: g.id,
      profile_id: currentProfileId,
      title: g.title,
      target_amount: g.targetAmount,
      current_amount: g.currentAmount,
      monthly_keep_contribution: g.monthlyKeepContribution,
      category: g.category,
      notes: g.notes || ''
    }));
    if (goalsPayload.length > 0) {
      await supabaseClient.from('goals').upsert(goalsPayload);
    }

    const customPayload = state.customAreas.map(c => ({
      id: c.id,
      profile_id: currentProfileId,
      name: c.name,
      description: c.description || '',
      color_bg: c.colorBg || 'bg-pastel-gray',
      items: c.items || []
    }));
    if (customPayload.length > 0) {
      await supabaseClient.from('custom_areas').upsert(customPayload);
    }

    updateCloudStatus('online');
  } catch (err) {
    console.error('Error syncing to Supabase:', err);
    updateCloudStatus('offline');
  } finally {
    pushCooldownTimer = setTimeout(() => {
      isPushingToCloud = false;
    }, 1500);
  }
}

function updateCloudStatus(status) {
  cloudStatus = status || 'online';
  const dot = document.getElementById('cloudStatusDot');
  const text = document.getElementById('cloudStatusText');
  if (!dot || !text) return;

  if (cloudStatus === 'online') {
    dot.className = 'cloud-pulse-dot online';
    text.textContent = t('liveSupabase');
    text.className = 'font-mono-tech text-[0.7rem] font-bold text-emerald-800';
  } else if (cloudStatus === 'syncing') {
    dot.className = 'cloud-pulse-dot syncing';
    text.textContent = t('syncing');
    text.className = 'font-mono-tech text-[0.7rem] font-bold text-amber-700';
  } else if (cloudStatus === 'offline') {
    dot.className = 'cloud-pulse-dot offline';
    text.textContent = t('offlineCached');
    text.className = 'font-mono-tech text-[0.7rem] font-bold text-neutral-500';
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const savedLang = localStorage.getItem(LANG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const res = { ...DEFAULT_STATE, ...parsed };
      if (savedLang) res.language = savedLang;
      return res;
    }
    if (savedLang) DEFAULT_STATE.language = savedLang;
  } catch (e) {
    console.error('Failed to load localStorage state, using default', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function getNetSalary() {
  const salary = Number(state.salary || 0);
  const totalDiscounts = (state.salarySplits || []).reduce((sum, s) => {
    let d = 0;
    if (s.discountsList && s.discountsList.length > 0) d = s.discountsList.reduce((acc, curr) => acc + Number(curr.amount), 0);
    else if (s.discounts) d = Number(s.discounts);
    return sum + d;
  }, 0);
  return Math.max(0, salary - totalDiscounts);
}
function saveState() {
  try {
    const fixedAlloc = state.allocations.find(a => a.id === 'fixed');
    if (fixedAlloc) {
      const netSalary = getNetSalary();
      const totalFixed = (state.fixedPayments || []).reduce((sum, bill) => sum + (Number(bill.amount) || 0), 0);
      fixedAlloc.amount = totalFixed;
      fixedAlloc.percent = netSalary > 0 ? (totalFixed / netSalary) * 100 : 0;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    localStorage.setItem(LANG_KEY, state.language || 'pt-BR');
    renderApp();

    if (syncDebounceTimer) clearTimeout(syncDebounceTimer);
    syncDebounceTimer = setTimeout(() => {
      syncToSupabase();
    }, 300);
  } catch (e) {
    console.error('Failed to save state', e);
  }
}

// Helpers
function formatCurrency(num) {
  const c = state.currency || 'R$';
  const val = Number(num || 0);
  const locale = state.language === 'en' ? 'en-US' : 'pt-BR';
  return `${c} ${val.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function recalculateAllocations() {
  const netSalary = getNetSalary();
  
  const totalFixed = (state.fixedPayments || []).reduce((sum, bill) => sum + (Number(bill.amount) || 0), 0);
  const fixedAlloc = state.allocations.find(a => a.id === 'fixed');
  if (fixedAlloc) {
    fixedAlloc.amount = totalFixed;
    fixedAlloc.percent = netSalary > 0 ? (totalFixed / netSalary) * 100 : 0;
  }

  state.allocations.forEach(alloc => {
    if (alloc.id !== 'fixed') {
      alloc.amount = Math.round((alloc.percent / 100) * netSalary * 100) / 100;
    }
  });
  const wkAlloc = state.allocations.find(a => a.id === 'weekend');
  if (wkAlloc) {
    state.weekendSpending.monthlyAllocation = wkAlloc.amount;
  }
}

// Apply text translations to static DOM elements
function applyStaticTranslations() {
  const map = {
    appTitleText: t('appTitle'),
    appSubtitleText: t('appSubtitle'),
    settingsBtnLabel: t('settingsBtn'),
    sampleDataBtn: t('sampleDataBtn'),
    heroBadgeText: t('heroBadge'),
    heroHeadingText: t('heroHeading'),
    heroDescText: t('heroDesc'),
    salaryLabelText: t('salaryLabel'),
    salaryBadgeText: t('netIncomeBadge'),
    salaryFrequencyLabel: t('salaryFrequency'),
    salaryHintText: t('salaryHint'),
    distributionLabelText: t('distributionLabel'),
    allocatedLabelText: t('allocatedLabel'),
    remainingLabelText: t('remainingLabel'),
    legendFixedText: t('legendFixed'),
    legendDebtsText: t('legendDebts'),
    legendWeekendText: t('legendWeekend'),
    legendKeepText: t('legendKeep'),
    legendUnallocatedText: t('legendUnallocated'),
    area1Badge: t('area1Badge'),
    area1Heading: t('area1Heading'),
    area1Desc: t('area1Desc'),
    addDebtBtnText: t('addDebtBtn'),
    debtTipTitle: t('strategyTipTitle'),
    debtTipDesc: t('strategyTipDesc'),
    area2Badge: t('area2Badge'),
    area2Heading: t('area2Heading'),
    area2Desc: t('area2Desc'),
    resetMonthBtn: t('resetMonthBtn'),
    addFixedBtnText: t('addFixedBtn'),
    area3Badge: t('area3Badge'),
    area3Heading: t('area3Heading'),
    area3Desc: t('area3Desc'),
    addWeekendBtnText: t('addWeekendBtn'),
    area4Badge: t('area4Badge'),
    area4Heading: t('area4Heading'),
    area4Desc: t('area4Desc'),
    addKeepBtnText: t('adjustKeepBtn'),
    keepLedgerTitle: t('recentKeepLedger'),
    area5Badge: t('area5Badge'),
    area5Heading: t('area5Heading'),
    area5Desc: t('area5Desc'),
    addCustomAreaBtnText: t('addCustomAreaBtn'),
    area6Badge: t('area6Badge'),
    area6Heading: t('area6Heading'),
    area6Desc: t('area6Desc'),
    addGoalBtnText: t('createGoalBtn'),
    settingsAreaBadge: t('settingsAreaBadge'),
    settingsAreaHeading: t('settingsAreaHeading'),
    settingsAreaDesc: t('settingsAreaDesc'),
    openModalSettingsBtnText: t('openModalSettingsBtnText'),
    footerTitle: t('footerTitle'),
    footerDesc: t('footerDesc'),
    clearDbBtn: t('clearDbBtn'),
    reloadDemoBtn: t('reloadDemoBtn'),
    navOverviewLabel: t('navOverview'),
    navDebtsLabel: t('navDebts'),
    navFixedLabel: t('navFixed'),
    navWeekendLabel: t('navWeekend'),
    navKeepLabel: t('navKeep'),
    navCustomLabel: t('navCustom'),
    navGoalsLabel: t('navGoals'),
    navSettingsLabel: t('navSettings')
  };

  for (const [id, val] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  }
}

// --- DOM Rendering ---

function renderApp() {
  applyStaticTranslations();
  renderAuthHeader();
  renderHeroAndAllocationOverview();
  renderDebtsSection();
  renderFixedPaymentsSection();
  renderWeekendSection();
  renderKeepSection();
  renderCustomAreasSection();
  renderGoalsSection();
  updateNavActiveState();
  updateCloudStatus(cloudStatus);
}

function renderAuthHeader() {
  const container = document.getElementById('authHeaderContainer');
  const mainApp = document.getElementById('mainApp');
  const authScreen = document.getElementById('fullScreenAuth');

  if (currentUser) {
    if (mainApp) mainApp.style.display = 'block';
    if (authScreen) authScreen.style.display = 'none';

    if (container) {
      container.innerHTML = `
        <div class="flex items-center gap-1.5 border-hard rounded-pill px-2.5 py-1 bg-pastel-mint">
          <span class="w-2 h-2 rounded-full bg-emerald-700"></span>
          <span class="font-mono text-xs font-bold text-emerald-950 truncate max-w-[140px]" title="${currentUser.email}">${currentUser.email}</span>
        </div>
        <button onclick="handleSignOut()" class="btn-secondary btn-pill-small" title="${t('logOut')}">
          ${t('logOut')}
        </button>
      `;
    }
  } else {
    if (mainApp) mainApp.style.display = 'none';
    if (authScreen) {
      authScreen.style.display = 'flex';
      openAuthModal('signin'); // trigger rendering of auth screen content
    }
    
    if (container) container.innerHTML = '';
  }
}

function renderHeroAndAllocationOverview() {
  const salaryInput = document.getElementById('salaryInput');
  if (salaryInput && document.activeElement !== salaryInput) {
    salaryInput.value = state.salary;
  }

  const totalAllocatedPercent = state.allocations.reduce((sum, a) => sum + (Number(a.percent) || 0), 0);
  const totalAllocatedAmount = state.allocations.reduce((sum, a) => sum + (Number(a.amount) || 0), 0);
  const salary = Number(state.salary) || 0;
  const totalDiscounts = (state.salarySplits || []).reduce((sum, s) => {
    let d = 0;
    if (s.discountsList && s.discountsList.length > 0) d = s.discountsList.reduce((acc, curr) => acc + Number(curr.amount), 0);
    else if (s.discounts) d = Number(s.discounts);
    return sum + d;
  }, 0);
  const netSalary = Math.max(0, salary - totalDiscounts);
  const unallocatedAmount = netSalary - totalAllocatedAmount;
  const unallocatedPercent = netSalary > 0 ? (unallocatedAmount / netSalary) * 100 : (totalAllocatedAmount > 0 ? -100 : 0);

  const salaryBadgeText = document.getElementById('salaryBadgeText');
  if (salaryBadgeText) {
    if (totalDiscounts > 0) {
      salaryBadgeText.textContent = `${state.language === 'en' ? 'NET' : 'LÍQUIDO'}: ${formatCurrency(netSalary)}`;
      salaryBadgeText.className = "badge-pill bg-pastel-mint border-hard text-[0.65rem]";
    } else {
      salaryBadgeText.textContent = state.language === 'en' ? 'GROSS = NET' : 'BRUTO = LÍQUIDO';
      salaryBadgeText.className = "badge-pill bg-pastel-yellow border-hard text-[0.65rem]";
    }
  }

  const splitsDisplay = document.getElementById('salarySplitsDisplay');
  if (splitsDisplay) {
    if (state.salarySplits && state.salarySplits.length > 0) {
      splitsDisplay.innerHTML = state.salarySplits.map(s => {
        const baseAmt = salary * (Number(s.percent) / 100);
        let disc = 0;
        if (s.discountsList && s.discountsList.length > 0) {
          disc = s.discountsList.reduce((acc, curr) => acc + Number(curr.amount), 0);
        } else if (s.discounts) {
          disc = Number(s.discounts);
        }
        const splitAmt = Math.max(0, baseAmt - disc);
        let discountHtml = '';
        if (disc > 0) {
           discountHtml = `<span class="text-rose-600 text-[0.6rem] ml-1">(-${formatCurrency(disc)})</span>`;
        }
        return `<div class="flex items-center justify-between text-[0.75rem] font-mono font-medium text-neutral-700">
          <span>${t('salarySplitDay', {day: s.day})} <span class="text-neutral-400">(${s.percent}%)</span>${discountHtml}</span>
          <strong class="text-neutral-900">${formatCurrency(splitAmt)}</strong>
        </div>`;
      }).join('');
    } else {
      splitsDisplay.innerHTML = '';
    }
  }

  const statusEl = document.getElementById('allocationStatusBadge');
  if (statusEl) {
    if (Math.abs(unallocatedPercent) < 0.01) {
      statusEl.className = 'badge-pill bg-pastel-mint text-emerald-950 border-hard';
      statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-700"></span> ${t('statusBalanced')}`;
    } else if (unallocatedPercent > 0) {
      statusEl.className = 'badge-pill bg-pastel-yellow text-amber-950 border-hard';
      statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-amber-600"></span> ${unallocatedPercent.toFixed(1)}% (${formatCurrency(unallocatedAmount)}) ${t('statusUnallocated')}`;
    } else {
      statusEl.className = 'badge-pill bg-pastel-peach text-rose-950 border-hard';
      statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-rose-600"></span> ${t('statusOverallocated')} ${Math.abs(unallocatedPercent).toFixed(1)}% (${formatCurrency(Math.abs(unallocatedAmount))})`;
    }
  }

  const totalAllocAmountEl = document.getElementById('totalAllocatedAmountDisplay');
  if (totalAllocAmountEl) totalAllocAmountEl.textContent = formatCurrency(totalAllocatedAmount);

  const totalAllocPctEl = document.getElementById('totalAllocatedPercentDisplay');
  if (totalAllocPctEl) totalAllocPctEl.textContent = `${totalAllocatedPercent.toFixed(1)}%`;

  const unallocAmountEl = document.getElementById('unallocatedAmountDisplay');
  if (unallocAmountEl) unallocAmountEl.textContent = formatCurrency(unallocatedAmount);

  const allocBar = document.getElementById('allocationMultiBar');
  if (allocBar) {
    allocBar.innerHTML = '';
    state.allocations.forEach(alloc => {
      if (alloc.percent <= 0) return;
      const seg = document.createElement('div');
      seg.className = `allocation-segment ${alloc.color}`;
      seg.style.width = `${Math.min(Math.max(alloc.percent, 2), 100)}%`;
      seg.title = `${alloc.title}: ${alloc.percent}% (${formatCurrency(alloc.amount)})`;
      allocBar.appendChild(seg);
    });
    if (unallocatedPercent > 0) {
      const emptySeg = document.createElement('div');
      emptySeg.className = 'allocation-segment bg-white';
      emptySeg.style.width = `${unallocatedPercent}%`;
      emptySeg.title = `${t('legendUnallocated')}: ${unallocatedPercent.toFixed(1)}% (${formatCurrency(unallocatedAmount)})`;
      allocBar.appendChild(emptySeg);
    }
  }

function getCalculatedPaychecks() {
  const salary = Number(state.salary) || 0;
  let paychecks = (state.salarySplits || []).map(s => {
    let baseAmount = salary * (Number(s.percent) / 100);
    let disc = 0;
    if (s.discountsList && s.discountsList.length > 0) {
      disc = s.discountsList.reduce((sum, d) => sum + Number(d.amount), 0);
    } else if (s.discounts) {
      disc = Number(s.discounts);
    }
    return {
      day: Number(s.day),
      percent: Number(s.percent),
      baseAmount: baseAmount,
      discounts: disc,
      amount: Math.max(0, baseAmount - disc),
      fixedAllocatedAmount: 0,
      remainingAmount: 0,
      remainingPercent: 0
    };
  }).sort((a, b) => a.day - b.day);

  let totalFixedMapped = 0;
  if (paychecks.length > 0) {
      (state.fixedPayments || []).forEach(bill => {
          let due = Number(bill.dueDay) || 1;
          let assigned = paychecks.filter(p => p.day <= due).pop();
          if (!assigned) assigned = paychecks[paychecks.length - 1]; 
          assigned.fixedAllocatedAmount += Number(bill.amount) || 0;
          totalFixedMapped += Number(bill.amount) || 0;
      });
  }

  const fixedAlloc = state.allocations.find(a => a.id === 'fixed');
  const totalFixedAllocAmount = fixedAlloc ? Number(fixedAlloc.amount) || 0 : 0;
  
  let totalRemainingAmount = 0;
  if (paychecks.length > 0) {
      // Subtract ANY manual splits from the pool BEFORE calculating proportional remaining
      paychecks.forEach(p => {
          p.customAllocatedAmount = 0;
          state.allocations.forEach(a => {
              if (a.id !== 'fixed' && a.customSplits && typeof a.customSplits[p.day] === 'number') {
                  p.customAllocatedAmount += a.customSplits[p.day];
              }
          });
          
          if (totalFixedMapped > 0) {
              p.fixedAllocatedAmount = (p.fixedAllocatedAmount / totalFixedMapped) * totalFixedAllocAmount;
          } else {
              p.fixedAllocatedAmount = totalFixedAllocAmount * (p.percent / 100);
          }
          
          p.remainingAmount = Math.max(0, p.amount - p.fixedAllocatedAmount - p.customAllocatedAmount);
          totalRemainingAmount += p.remainingAmount;
      });
      
      paychecks.forEach(p => {
          p.remainingPercent = totalRemainingAmount > 0 ? (p.remainingAmount / totalRemainingAmount) * 100 : 0;
      });
  }
  return paychecks;
}

  const areaGrid = document.getElementById('heroAllocationCards');
  if (areaGrid) {
    let paychecks = getCalculatedPaychecks();

    areaGrid.innerHTML = state.allocations.map(alloc => {
      let splitsHtml = '';
      if (paychecks.length > 0 && alloc.amount > 0) {
        splitsHtml = '<div class="mb-3 space-y-1 pt-2 border-t border-dashed border-neutral-400/30">' + 
          paychecks.map(p => {
            let splitAmt = 0;
            let splitPct = 0;
            let displayPercent = '';
            let isCustom = false;
            if (alloc.id === 'fixed') {
                splitAmt = p.fixedAllocatedAmount;
                displayPercent = '';
            } else if (alloc.customSplits && typeof alloc.customSplits[p.day] === 'number') {
                splitAmt = alloc.customSplits[p.day];
                splitPct = alloc.amount > 0 ? (splitAmt / alloc.amount) * 100 : 0;
                isCustom = true;
            } else {
                splitAmt = alloc.amount * (p.remainingPercent / 100);
                splitPct = p.remainingPercent;
                displayPercent = ' <span class="opacity-50">(' + p.remainingPercent.toFixed(1) + '%)</span>';
            }
            
            if (alloc.id === 'fixed') {
                return '<div class="flex justify-between items-center text-[0.65rem] font-mono">' +
                       '<span class="text-neutral-600">' + t('salarySplitDay', {day: p.day}) + displayPercent + ':</span>' +
                       '<strong class="text-neutral-900">' + formatCurrency(splitAmt) + '</strong>' +
                       '</div>';
            } else {
                return `
                <div class="flex justify-between items-center text-[0.65rem] font-mono group mb-1">
                   <span class="text-neutral-600 flex items-center gap-1">${t('salarySplitDay', {day: p.day})} 
                     <input type="number" class="w-10 text-center bg-transparent border-b border-dashed border-neutral-400/50 hover:border-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors ${isCustom ? 'text-rose-600 font-bold opacity-100' : 'opacity-50'}" value="${splitPct.toFixed(1)}" min="0" max="100" step="0.1" onchange="updateSubSplit('${alloc.id}', ${p.day}, 'percent', this.value)">%:
                   </span>
                   <strong class="text-neutral-900 flex items-center gap-1">${state.currency} 
                     <input type="number" class="w-16 text-right bg-transparent border-b border-dashed border-neutral-400/50 hover:border-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors ${isCustom ? 'text-rose-600' : ''}" value="${splitAmt.toFixed(2)}" min="0" step="1" onchange="updateSubSplit('${alloc.id}', ${p.day}, 'amount', this.value)">
                   </strong>
                </div>`;
            }
          }).join('') + '</div>';
      }

      return `
      <div class="border-hard rounded-card p-4 ${alloc.color} flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="font-mono-tech text-xs font-bold">${alloc.title}</span>
            <span class="badge-pill bg-white text-xs">${alloc.percent}%</span>
          </div>
          <div class="flex items-baseline justify-between mb-3">
            <span class="text-xl font-bold tracking-tight">${formatCurrency(alloc.amount)}</span>
            <span class="text-xs text-neutral-600">${t('perMonth')}</span>
          </div>
          ${splitsHtml}
        </div>
        <div class="pt-2 border-t-hard border-neutral-900/20 flex items-center gap-2 mt-auto">
          <div class="flex-1 flex items-center gap-1">
            <input type="number" 
              class="w-16 py-1 px-1.5 text-xs text-center font-bold rounded-inner border-hard ${alloc.id === 'fixed' ? 'bg-neutral-100 text-neutral-500' : 'bg-white'}" 
              value="${Number(alloc.percent).toFixed(1)}" 
              min="0" max="100" step="0.1" 
              onchange="updateAllocationPercent('${alloc.id}', this.value)"
              ${alloc.id === 'fixed' ? 'readonly disabled title="Auto-calculado pela Área 02"' : ''}
            />
            <span class="text-xs font-bold">%</span>
          </div>
          <div class="flex-1 flex items-center gap-1">
            <span class="text-xs font-mono font-bold">${state.currency}</span>
            <input type="number" 
              class="w-20 py-1 px-1.5 text-xs text-center font-bold rounded-inner border-hard ${alloc.id === 'fixed' ? 'bg-neutral-100 text-neutral-500' : 'bg-white'}" 
              value="${Number(alloc.amount).toFixed(2)}" 
              min="0" step="0.01" 
              onchange="updateAllocationAmount('${alloc.id}', this.value)"
              ${alloc.id === 'fixed' ? 'readonly disabled title="Auto-calculado pela Área 02"' : ''}
            />
          </div>
        </div>
      </div>
    `;
    }).join('');
  }
}

window.updateAllocationPercent = function(id, newPct) {
  const pct = Math.max(0, parseFloat(newPct) || 0);
  const alloc = state.allocations.find(a => a.id === id);
  if (alloc) {
    alloc.percent = pct;
    alloc.amount = Math.round((pct / 100) * getNetSalary() * 100) / 100;
    alloc.customSplits = null;
    saveState();
  }
};

window.updateAllocationAmount = function(id, newAmt) {
  const amt = Math.max(0, parseFloat(newAmt) || 0);
  const netSalary = getNetSalary();
  const alloc = state.allocations.find(a => a.id === id);
  if (alloc) {
    alloc.amount = amt;
    alloc.percent = netSalary > 0 ? (amt / netSalary) * 100 : 0;
    alloc.customSplits = null;
    saveState();
  }
};

window.updateSubSplit = function(allocId, targetDay, field, value) {
  const alloc = state.allocations.find(a => a.id === allocId);
  if (!alloc || alloc.id === 'fixed') return;

  if (!alloc.customSplits) {
      alloc.customSplits = {};
      let paychecks = getCalculatedPaychecks();
      paychecks.forEach(p => {
          alloc.customSplits[p.day] = alloc.amount * (p.remainingPercent / 100);
      });
  }

  let val = Number(value) || 0;
  if (field === 'percent') val = (val / 100) * alloc.amount;
  val = Math.max(0, Math.min(val, alloc.amount));
  
  alloc.customSplits[targetDay] = val;

  const otherDays = Object.keys(alloc.customSplits).map(Number).filter(d => d !== targetDay);
  if (otherDays.length > 0) {
      if (otherDays.length === 1) {
          alloc.customSplits[otherDays[0]] = Math.max(0, alloc.amount - val);
      } else {
          let remainder = Math.max(0, alloc.amount - val);
          let otherSum = otherDays.reduce((sum, d) => sum + alloc.customSplits[d], 0);
          otherDays.forEach(d => {
              if (otherSum === 0) alloc.customSplits[d] = remainder / otherDays.length;
              else alloc.customSplits[d] = (alloc.customSplits[d] / otherSum) * remainder;
          });
      }
  }

  saveState();
};

// --- Area 1: Debts Section ---
function renderDebtsSection() {
  const debtAlloc = state.allocations.find(a => a.id === 'debts') || { percent: 15, amount: 750 };
  
  const totalPrincipal = state.debts.reduce((sum, d) => sum + Number(d.originalBalance || 0), 0);
  const totalTargetSettlement = state.debts.reduce((sum, d) => sum + Number(d.settlementTargetAmount || 0), 0);
  const totalDiscount = totalPrincipal - totalTargetSettlement;
  const overallDiscountRate = totalPrincipal > 0 ? (totalDiscount / totalPrincipal) * 100 : 0;
  
  const monthlyFund = Number(debtAlloc.amount || 0);
  const monthsToSettleAll = monthlyFund > 0 ? Math.ceil(totalTargetSettlement / monthlyFund) : Infinity;

  const summaryEl = document.getElementById('debtsSummaryCards');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('totalDebtOwed')}</div>
        <div class="text-2xl font-bold text-neutral-900">${formatCurrency(totalPrincipal)}</div>
        <div class="text-xs text-neutral-500 mt-1">${state.debts.length} ${t('activeRecordsDb')}</div>
      </div>
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('targetSettlementSum')}</div>
        <div class="text-2xl font-bold text-purple-950">${formatCurrency(totalTargetSettlement)}</div>
        <div class="text-xs text-purple-700 font-semibold mt-1">${t('expectedSaving')} ${formatCurrency(totalDiscount)} (${overallDiscountRate.toFixed(0)}% off)</div>
      </div>
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('monthlySettlementFund')}</div>
        <div class="text-2xl font-bold text-neutral-900">${formatCurrency(monthlyFund)} <span class="text-xs font-normal text-neutral-500">(${debtAlloc.percent}%)</span></div>
        <div class="text-xs text-neutral-600 mt-1">
          ${monthsToSettleAll !== Infinity ? t('canSettleAllIn', { months: monthsToSettleAll }) : t('setBudgetEstimate')}
        </div>
      </div>
    `;
  }

  const listEl = document.getElementById('debtsList');
  if (listEl) {
    if (state.debts.length === 0) {
      listEl.innerHTML = `
        <div class="p-8 text-center border-hard rounded-card bg-white">
          <p class="text-neutral-500 font-semibold">${t('noDebtsMsg')}</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = state.debts.map(debt => {
      let statusBadge = '';
      if (debt.status === 'unpaid') {
        statusBadge = `<span class="badge-pill bg-rose-100 text-rose-900 border-hard">${t('delinquentBadge', { months: debt.monthsOverdue })}</span>`;
      } else if (debt.status === 'negotiating') {
        statusBadge = `<span class="badge-pill bg-amber-100 text-amber-900 border-hard">${t('negotiatingBadge')}</span>`;
      } else if (debt.status === 'payment_plan') {
        statusBadge = `<span class="badge-pill bg-blue-100 text-blue-900 border-hard">${t('installmentBadge')}</span>`;
      } else if (debt.status === 'settled') {
        statusBadge = `<span class="badge-pill bg-emerald-100 text-emerald-900 border-hard">${t('settledBadge')}</span>`;
      }

      const discountDollars = debt.originalBalance - debt.settlementTargetAmount;
      const discountPct = debt.originalBalance > 0 ? (discountDollars / debt.originalBalance) * 100 : 0;
      const monthsForThisDebt = monthlyFund > 0 ? Math.ceil(debt.settlementTargetAmount / monthlyFund) : null;

      return `
        <div class="border-hard rounded-card bg-white p-5 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <div class="space-y-1.5 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="text-lg font-bold">${debt.creditor}</h3>
              <span class="badge-pill bg-neutral-100 text-neutral-800 border-hard text-[0.65rem]">${debt.type}</span>
              ${statusBadge}
            </div>
            <p class="text-xs text-neutral-600">${debt.notes || ''}</p>
            <div class="flex items-center gap-4 text-xs font-mono text-neutral-500 pt-1">
              <span>${t('originalLabel')} <strong class="text-neutral-900">${formatCurrency(debt.originalBalance)}</strong></span>
              <span>${t('targetLabel')} <strong class="text-purple-900">${formatCurrency(debt.settlementTargetAmount)}</strong></span>
              <span class="text-emerald-700 font-semibold">${discountPct.toFixed(0)}% ${t('haircutSavings')}</span>
            </div>
          </div>
          
          <div class="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-neutral-200">
            ${monthsForThisDebt ? `
              <div class="text-right hidden sm:block">
                <div class="text-xs font-mono-tech text-neutral-400">${t('estTimelineLabel')}</div>
                <div class="text-xs font-bold text-neutral-800">~${monthsForThisDebt} ${t('monthsWord')}</div>
              </div>
            ` : ''}
            <div class="flex items-center gap-2">
              <button onclick="toggleDebtStatus('${debt.id}')" class="btn-secondary btn-pill-small" title="Cycle Status">
                ${t('statusBtn')}
              </button>
              <button onclick="openEditDebtModal('${debt.id}')" class="btn-secondary btn-pill-small">
                ${t('editBtn')}
              </button>
              <button onclick="deleteDebt('${debt.id}')" class="btn-danger btn-pill-small">
                ${t('removeBtn')}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

window.toggleDebtStatus = function(id) {
  const debt = state.debts.find(d => d.id === id);
  if (!debt) return;
  const cycle = ['unpaid', 'negotiating', 'payment_plan', 'settled'];
  const nextIdx = (cycle.indexOf(debt.status) + 1) % cycle.length;
  debt.status = cycle[nextIdx];
  saveState();
};

window.deleteDebt = async function(id) {
  if (confirm(state.language === 'en' ? 'Are you sure you want to remove this debt?' : 'Tem certeza que deseja excluir esta dívida?')) {
    state.debts = state.debts.filter(d => d.id !== id);
    saveState();

    if (supabaseClient) {
      try {
        isPushingToCloud = true;
        await supabaseClient.from('debts').delete().eq('id', id).eq('profile_id', currentProfileId);
      } catch (e) {
        console.error('Error deleting debt from Supabase:', e);
      } finally {
        setTimeout(() => { isPushingToCloud = false; }, 1000);
      }
    }
  }
};

// --- Area 2: Fixed Monthly Payments ---
function renderFixedPaymentsSection() {
  const fixedAlloc = state.allocations.find(a => a.id === 'fixed') || { percent: 45, amount: 2250 };
  const totalBills = state.fixedPayments.reduce((sum, f) => sum + Number(f.amount || 0), 0);
  const paidBills = state.fixedPayments.filter(f => f.isPaid);
  const paidSum = paidBills.reduce((sum, f) => sum + Number(f.amount || 0), 0);
  const unpaidSum = totalBills - paidSum;
  const diffFromBudget = fixedAlloc.amount - totalBills;

  const summaryEl = document.getElementById('fixedSummaryCards');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('totalFixedBills')}</div>
        <div class="text-2xl font-bold text-neutral-900">${formatCurrency(totalBills)}</div>
        <div class="text-xs text-neutral-500 mt-1">${state.fixedPayments.length} ${t('recurringObligations')}</div>
      </div>
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('allocatedSalaryBudget')}</div>
        <div class="text-2xl font-bold text-neutral-900">${formatCurrency(fixedAlloc.amount)} <span class="text-xs font-normal text-neutral-500">(${fixedAlloc.percent}%)</span></div>
        <div class="text-xs mt-1 font-semibold ${diffFromBudget >= 0 ? 'text-emerald-700' : 'text-rose-700'}">
          ${diffFromBudget >= 0 ? `+${formatCurrency(diffFromBudget)} ${t('bufferLeft')}` : `${t('exceedsBudget')} ${formatCurrency(Math.abs(diffFromBudget))}!`}
        </div>
      </div>
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('thisMonthProgress')}</div>
        <div class="text-2xl font-bold text-neutral-900">${t('billsPaidCounter', { paid: paidBills.length, total: state.fixedPayments.length })}</div>
        <div class="text-xs text-neutral-600 mt-1">
          ${t('paidLabel')} <strong class="text-emerald-700">${formatCurrency(paidSum)}</strong> | <strong class="text-amber-700">${formatCurrency(unpaidSum)}</strong>
        </div>
      </div>
    `;
  }

  const listEl = document.getElementById('fixedPaymentsList');
  if (listEl) {
    if (state.fixedPayments.length === 0) {
      listEl.innerHTML = `<div class="p-8 text-center border-hard rounded-card bg-white text-neutral-500">${t('noFixedMsg')}</div>`;
      return;
    }

    listEl.innerHTML = state.fixedPayments.map(fix => `
      <div class="border-hard rounded-card ${fix.isPaid ? 'bg-emerald-50/40' : 'bg-white'} p-4 flex items-center justify-between gap-4 transition">
        <div class="flex items-center gap-3.5 flex-1">
          <input type="checkbox" 
            class="custom-checkbox" 
            ${fix.isPaid ? 'checked' : ''} 
            onchange="toggleFixedPaid('${fix.id}')"
            title="Toggle Status"
          />
          <div class="space-y-0.5">
            <div class="flex items-center gap-2">
              <span class="font-bold text-base ${fix.isPaid ? 'line-through text-neutral-400' : 'text-neutral-900'}">${fix.name}</span>
              <span class="badge-pill bg-white text-neutral-700 border-hard text-[0.65rem]">${fix.category}</span>
              <span class="text-xs font-mono text-neutral-500">${t('dueDayLabel', { day: fix.dueDay })}</span>
            </div>
            ${fix.notes ? `<div class="text-xs text-neutral-500">${fix.notes}</div>` : ''}
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          <span class="text-lg font-bold font-mono ${fix.isPaid ? 'text-emerald-800' : 'text-neutral-900'}">
            ${formatCurrency(fix.amount)}
          </span>
          <button onclick="openEditFixedModal('${fix.id}')" class="btn-secondary btn-pill-small">${t('editBtn')}</button>
          <button onclick="deleteFixedPayment('${fix.id}')" class="btn-danger btn-pill-small">${t('removeBtn')}</button>
        </div>
      </div>
    `).join('');
  }
}

window.toggleFixedPaid = function(id) {
  const fix = state.fixedPayments.find(f => f.id === id);
  if (fix) {
    fix.isPaid = !fix.isPaid;
    saveState();
  }
};

window.resetMonthlyFixedPayments = function() {
  const msg = state.language === 'en' ? 'Reset payment status for all fixed bills to UNPAID for the new month?' : 'Reiniciar status de pagamento de todas as contas fixas para NÃO PAGAS no novo mês?';
  if (confirm(msg)) {
    state.fixedPayments.forEach(f => f.isPaid = false);
    saveState();
  }
};

window.deleteFixedPayment = async function(id) {
  const msg = state.language === 'en' ? 'Delete this fixed payment obligation?' : 'Excluir esta conta fixa?';
  if (confirm(msg)) {
    state.fixedPayments = state.fixedPayments.filter(f => f.id !== id);
    saveState();

    if (supabaseClient) {
      try {
        isPushingToCloud = true;
        await supabaseClient.from('fixed_payments').delete().eq('id', id).eq('profile_id', currentProfileId);
      } catch (e) {
        console.error('Error deleting fixed payment from Supabase:', e);
      } finally {
        setTimeout(() => { isPushingToCloud = false; }, 1000);
      }
    }
  }
};

// --- Area 3: Weekend Spending ---
function renderWeekendSection() {
  const wkAlloc = state.allocations.find(a => a.id === 'weekend') || { percent: 16, amount: 800 };
  const monthlyTotal = Number(wkAlloc.amount || 0);
  const perWeekendBudget = monthlyTotal / 4;

  const expenses = state.weekendSpending.expenses || [];
  const totalSpentThisMonth = expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);

  const activeWkNumber = state.weekendSpending.activeWeekend || 1;
  const activeWkExpenses = expenses.filter(e => Number(e.weekendNumber) === activeWkNumber);
  const activeWkSpent = activeWkExpenses.reduce((sum, e) => sum + Number(e.amount || 0), 0);
  const activeWkRemaining = perWeekendBudget - activeWkSpent;

  const summaryEl = document.getElementById('weekendSummaryCards');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('monthlyWeekendPool')}</div>
        <div class="text-2xl font-bold text-neutral-900">${formatCurrency(monthlyTotal)}</div>
        <div class="text-xs text-neutral-500 mt-1">${wkAlloc.percent}% ${t('dedicatedSalary')}</div>
      </div>
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('budgetPerWeekend')}</div>
        <div class="text-2xl font-bold text-amber-950">${formatCurrency(perWeekendBudget)}</div>
        <div class="text-xs text-neutral-600 mt-1">${t('safeCapWeekend')}</div>
      </div>
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('activeWeekendStatus', { num: activeWkNumber })}</div>
        <div class="text-2xl font-bold ${activeWkRemaining >= 0 ? 'text-emerald-900' : 'text-rose-900'}">
          ${formatCurrency(activeWkRemaining)} ${activeWkRemaining >= 0 ? t('leftLabel') : t('overLabel')}
        </div>
        <div class="text-xs text-neutral-600 mt-1">${t('spentOfPool', { spent: formatCurrency(activeWkSpent), budget: formatCurrency(perWeekendBudget) })}</div>
      </div>
    `;
  }

  const tabsContainer = document.getElementById('weekendTabs');
  if (tabsContainer) {
    tabsContainer.innerHTML = [1, 2, 3, 4].map(wNum => {
      const isAct = wNum === activeWkNumber;
      const wSpent = expenses.filter(e => Number(e.weekendNumber) === wNum).reduce((sum, e) => sum + Number(e.amount || 0), 0);
      return `
        <button onclick="setActiveWeekend(${wNum})" 
          class="badge-pill cursor-pointer ${isAct ? 'bg-black text-white border-hard' : 'bg-white text-neutral-800 border-hard'} py-1.5 px-3">
          ${t('weekendTab', { num: wNum })} (${formatCurrency(wSpent)})
        </button>
      `;
    }).join('');
  }

  const listEl = document.getElementById('weekendExpensesList');
  if (listEl) {
    if (activeWkExpenses.length === 0) {
      listEl.innerHTML = `<div class="p-6 text-center border-hard rounded-card bg-white text-neutral-500 text-sm">${t('noWeekendExpenses', { num: activeWkNumber, cap: formatCurrency(perWeekendBudget) })}</div>`;
      return;
    }

    listEl.innerHTML = activeWkExpenses.map(exp => `
      <div class="border-hard rounded-card bg-white p-3.5 flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span class="badge-pill bg-amber-100 text-amber-900 border-hard text-[0.65rem]">${exp.category}</span>
          <div>
            <div class="font-bold text-sm text-neutral-900">${exp.description}</div>
            <div class="text-xs text-neutral-500 font-mono">${exp.date}</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="font-bold font-mono text-neutral-900">${formatCurrency(exp.amount)}</span>
          <button onclick="deleteWeekendExpense('${exp.id}')" class="btn-danger btn-pill-small" title="${t('removeBtn')}">×</button>
        </div>
      </div>
    `).join('');
  }
}

window.setActiveWeekend = function(wNum) {
  state.weekendSpending.activeWeekend = wNum;
  saveState();
};

window.deleteWeekendExpense = async function(id) {
  state.weekendSpending.expenses = state.weekendSpending.expenses.filter(e => e.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderApp();

  if (supabaseClient) {
    try {
      isPushingToCloud = true;
      await supabaseClient
        .from('weekend_expenses')
        .delete()
        .eq('id', id)
        .eq('profile_id', currentProfileId);
    } catch (e) {
      console.error('Error deleting weekend expense from Supabase:', e);
    } finally {
      setTimeout(() => {
        isPushingToCloud = false;
      }, 1000);
    }
  }
};

// --- Area 4: Money I Can Keep ---
function renderKeepSection() {
  const keepAlloc = state.allocations.find(a => a.id === 'keep') || { percent: 24, amount: 1200 };
  const balance = Number(state.keepAccount.accumulatedBalance || 0);

  const totalFixed = state.fixedPayments.reduce((sum, f) => sum + Number(f.amount || 0), 0);
  const runwayMonths = totalFixed > 0 ? (balance / totalFixed).toFixed(1) : '∞';

  const summaryEl = document.getElementById('keepSummaryCards');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('totalLiquidKeepReserve')}</div>
        <div class="text-3xl font-bold text-emerald-950">${formatCurrency(balance)}</div>
        <div class="text-xs text-neutral-600 mt-1">${t('liquidReserveDesc')}</div>
      </div>
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('monthlySalaryKeep')}</div>
        <div class="text-3xl font-bold text-neutral-900">${formatCurrency(keepAlloc.amount)} <span class="text-xs font-normal text-neutral-500">(${keepAlloc.percent}%)</span></div>
        <div class="text-xs text-neutral-600 mt-1">${t('monthlyKeepDesc')}</div>
      </div>
      <div class="border-hard rounded-card bg-white p-4">
        <div class="font-mono-tech text-neutral-500 mb-1">${t('essentialRunwayMetric')}</div>
        <div class="text-3xl font-bold text-purple-950">${runwayMonths} <span class="text-sm font-normal">${t('monthsWord')}</span></div>
        <div class="text-xs text-neutral-600 mt-1">${t('runwayDesc')}</div>
      </div>
    `;
  }

  const listEl = document.getElementById('keepLedgerList');
  if (listEl) {
    const history = state.keepAccount.history || [];
    if (history.length === 0) {
      listEl.innerHTML = `<div class="p-6 text-center border-hard rounded-card bg-white text-neutral-500 text-sm">${t('noKeepRecords')}</div>`;
      return;
    }

    listEl.innerHTML = history.slice(-6).reverse().map(item => {
      const isPositive = Number(item.amount) >= 0;
      return `
        <div class="border-hard rounded-card bg-white p-3.5 flex items-center justify-between gap-3 text-sm">
          <div>
            <div class="font-bold text-neutral-900">${item.type}</div>
            <div class="text-xs text-neutral-500">${item.note} • ${item.date}</div>
          </div>
          <span class="font-bold font-mono ${isPositive ? 'text-emerald-700' : 'text-rose-700'}">
            ${isPositive ? '+' : ''}${formatCurrency(item.amount)}
          </span>
        </div>
      `;
    }).join('');
  }
}

// --- Area 5: Custom Budget Areas ---
function renderCustomAreasSection() {
  const container = document.getElementById('customAreasContainer');
  if (!container) return;

  const customAreas = state.customAreas || [];
  if (customAreas.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center border-hard rounded-card bg-white">
        <p class="text-neutral-500 text-sm font-medium">${t('noCustomAreasMsg')}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = customAreas.map(area => {
    const alloc = state.allocations.find(a => a.id === area.id) || { percent: area.percent || 5, amount: area.amount || 250 };
    const items = area.items || [];
    const totalItemsAmount = items.reduce((sum, it) => sum + Number(it.amount || 0), 0);
    const balanceDiff = alloc.amount - totalItemsAmount;

    return `
      <div class="border-hard rounded-container ${area.colorBg || 'bg-pastel-gray'} p-6 mb-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b-hard">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-xl font-bold">${area.name}</h3>
              <span class="badge-pill bg-white border-hard text-xs">${alloc.percent}%</span>
            </div>
            <p class="text-xs text-neutral-600 mt-1">${area.description || ''}</p>
          </div>
          
          <div class="flex items-center gap-3">
            <div class="text-right">
              <div class="font-mono-tech text-xs text-neutral-500">ALLOCATED</div>
              <div class="text-lg font-bold">${formatCurrency(alloc.amount)}</div>
            </div>
            <button onclick="openAddCustomItemModal('${area.id}')" class="btn-primary btn-pill-small">${t('addItemBtn')}</button>
            <button onclick="deleteCustomArea('${area.id}')" class="btn-danger btn-pill-small">${t('deleteAreaBtn')}</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          ${items.length === 0 ? `<div class="p-4 text-center border-hard rounded-card bg-white text-xs text-neutral-400 col-span-2">Nenhum item cadastrado nesta área.</div>` : ''}
          ${items.map(it => `
            <div class="border-hard rounded-card bg-white p-3 flex items-center justify-between gap-2">
              <div>
                <div class="font-bold text-sm">${it.name}</div>
                <div class="text-xs text-neutral-500">${it.notes || ''}</div>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold font-mono text-sm">${formatCurrency(it.amount)}</span>
                <button onclick="deleteCustomItem('${area.id}', '${it.id}')" class="btn-danger btn-pill-small">×</button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="flex justify-between items-center text-xs font-mono pt-2 border-t border-neutral-300">
          <span>${t('customItemsSum')} <strong>${formatCurrency(totalItemsAmount)}</strong></span>
          <span class="${balanceDiff >= 0 ? 'text-emerald-700' : 'text-rose-700'} font-bold">
            ${balanceDiff >= 0 ? `${t('customUnassignedBuffer')} ${formatCurrency(balanceDiff)}` : `${t('customOverAllocated')} ${formatCurrency(Math.abs(balanceDiff))}`}
          </span>
        </div>
      </div>
    `;
  }).join('');
}

window.deleteCustomArea = async function(id) {
  const msg = state.language === 'en' ? 'Delete this entire custom budget area?' : 'Excluir esta área orçamentária personalizada?';
  if (confirm(msg)) {
    state.customAreas = state.customAreas.filter(a => a.id !== id);
    state.allocations = state.allocations.filter(a => a.id !== id);
    saveState();

    if (supabaseClient) {
      try {
        isPushingToCloud = true;
        await supabaseClient.from('custom_areas').delete().eq('id', id).eq('profile_id', currentProfileId);
      } catch (e) {
        console.error('Error deleting custom area from Supabase:', e);
      } finally {
        setTimeout(() => { isPushingToCloud = false; }, 1000);
      }
    }
  }
};

window.deleteCustomItem = function(areaId, itemId) {
  const area = state.customAreas.find(a => a.id === areaId);
  if (area) {
    area.items = area.items.filter(it => it.id !== itemId);
    saveState();
  }
};

// --- Area 6: Goals Section ---
function renderGoalsSection() {
  const goals = state.goals || [];
  const listEl = document.getElementById('goalsList');
  if (!listEl) return;

  if (goals.length === 0) {
    listEl.innerHTML = `<div class="p-8 text-center border-hard rounded-card bg-white text-neutral-500">${t('noGoalsMsg')}</div>`;
    return;
  }

  listEl.innerHTML = goals.map(g => {
    const target = Number(g.targetAmount || 1);
    const current = Number(g.currentAmount || 0);
    const monthly = Number(g.monthlyKeepContribution || 0);
    const remaining = Math.max(0, target - current);
    const pct = Math.min(100, Math.round((current / target) * 100));

    const monthsLeft = monthly > 0 ? Math.ceil(remaining / monthly) : null;
    const isCompleted = current >= target;

    let milestone = t('goalGettingStarted');
    if (pct >= 100) milestone = t('goalAchievedTitle');
    else if (pct >= 75) milestone = t('goalFinalStretch');
    else if (pct >= 50) milestone = t('goalHalfway');
    else if (pct >= 25) milestone = t('goalMomentum');

    return `
      <div class="border-hard rounded-container bg-white p-6 flex flex-col justify-between gap-5 relative overflow-hidden">
        <div>
          <div class="flex items-start justify-between gap-3 mb-2">
            <div>
              <span class="badge-pill bg-purple-100 text-purple-900 border-hard text-[0.65rem] mb-1">${g.category || 'Meta'}</span>
              <h3 class="text-xl font-bold tracking-tight text-neutral-900">${g.title}</h3>
              <p class="text-xs text-neutral-600 mt-0.5">${g.notes || ''}</p>
            </div>
            <span class="badge-pill ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-neutral-900 text-white'} border-hard text-xs">
              ${t('goalDoneBadge', { pct })}
            </span>
          </div>

          <div class="flex items-baseline justify-between mt-4 mb-2 font-mono">
            <div>
              <span class="text-2xl font-extrabold text-neutral-900">${formatCurrency(current)}</span>
              <span class="text-xs text-neutral-500">${t('goalSavedLabel')}</span>
            </div>
            <div class="text-right">
              <span class="text-sm font-semibold text-neutral-500">${t('goalTargetLabel')}</span>
              <span class="text-base font-bold text-neutral-900">${formatCurrency(target)}</span>
            </div>
          </div>

          <div class="tech-progress-track mb-3">
            <div class="tech-progress-bar ${isCompleted ? 'bg-emerald-400' : 'bg-purple-600'}" style="width: ${pct}%"></div>
          </div>

          <div class="flex items-center justify-between text-xs font-mono text-neutral-600">
            <span>${milestone}</span>
            <span>
              ${isCompleted ? '🎉 ' + t('goalAchievedTitle') : monthsLeft ? t('goalEstimateTime', { months: monthsLeft, monthly: formatCurrency(monthly) }) : t('goalSetMonthlyKeep')}
            </span>
          </div>
        </div>

        <div class="pt-4 border-t-hard flex items-center justify-between gap-2">
          <button onclick="openContributeGoalModal('${g.id}')" class="btn-primary btn-pill-small">
            ${t('contributeFundsBtn')}
          </button>
          <div class="flex items-center gap-1.5">
            <button onclick="openEditGoalModal('${g.id}')" class="btn-secondary btn-pill-small">${t('editBtn')}</button>
            <button onclick="deleteGoal('${g.id}')" class="btn-danger btn-pill-small">${t('removeBtn')}</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.deleteGoal = async function(id) {
  const msg = state.language === 'en' ? 'Delete this financial goal?' : 'Excluir esta meta financeira?';
  if (confirm(msg)) {
    state.goals = state.goals.filter(g => g.id !== id);
    saveState();

    if (supabaseClient) {
      try {
        isPushingToCloud = true;
        await supabaseClient.from('goals').delete().eq('id', id).eq('profile_id', currentProfileId);
      } catch (e) {
        console.error('Error deleting goal from Supabase:', e);
      } finally {
        setTimeout(() => { isPushingToCloud = false; }, 1000);
      }
    }
  }
};


function openModal(htmlContent) {
  closeModal();
  const backdrop = document.createElement('div');
  backdrop.id = 'activeModalBackdrop';
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal-dialog p-6 border-hard stacked-sheet" onclick="event.stopPropagation()">
      ${htmlContent}
    </div>
  `;
  backdrop.onclick = closeModal;
  document.body.appendChild(backdrop);
}

function closeModal() {
  const existing = document.getElementById('activeModalBackdrop');
  if (existing) existing.remove();
}

// --- DEDICATED SETTINGS MODAL ---

window.openSettingsModal = function() {
  const currentLang = state.language || 'pt-BR';
  const currentCurr = state.currency || 'R$';

  openModal(`
    <div class="flex items-center justify-between pb-3 mb-5 border-b-hard">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-inner border-hard bg-black flex items-center justify-center text-white font-mono font-bold text-xs">
          ⚙️
        </div>
        <h3 class="text-xl font-bold">${t('settingsTitle')}</h3>
      </div>
      <button onclick="closeModal()" class="text-xl font-bold hover:text-neutral-500">✕</button>
    </div>

    <div class="space-y-5 text-sm">
      
      <!-- Parameter 1: Language -->
      <div class="p-4 bg-white border-hard rounded-card space-y-2.5">
        <label class="font-mono-tech text-xs font-bold block text-neutral-700">${t('settingsLanguageLabel')}</label>
        <div class="grid grid-cols-2 gap-2">
          <button type="button" onclick="setLanguage('pt-BR')" 
            class="py-2 px-3 border-hard rounded-pill font-bold text-xs flex items-center justify-center gap-2 transition ${currentLang === 'pt-BR' ? 'bg-black text-white' : 'bg-white text-neutral-800 hover:bg-neutral-100'}">
            <span>🇧🇷</span> Português (Brasil)
          </button>
          <button type="button" onclick="setLanguage('en')" 
            class="py-2 px-3 border-hard rounded-pill font-bold text-xs flex items-center justify-center gap-2 transition ${currentLang === 'en' ? 'bg-black text-white' : 'bg-white text-neutral-800 hover:bg-neutral-100'}">
            <span>🇺🇸</span> English
          </button>
        </div>
      </div>

      <!-- Parameter 2: Currency -->
      <div class="p-4 bg-white border-hard rounded-card space-y-2.5">
        <label class="font-mono-tech text-xs font-bold block text-neutral-700">${t('settingsCurrencyLabel')}</label>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button type="button" onclick="setCurrency('R$')" 
            class="py-2 px-2 border-hard rounded-pill font-mono font-bold text-xs flex items-center justify-center gap-1 transition ${currentCurr === 'R$' ? 'bg-black text-white' : 'bg-white text-neutral-800 hover:bg-neutral-100'}">
            R$ BRL
          </button>
          <button type="button" onclick="setCurrency('$')" 
            class="py-2 px-2 border-hard rounded-pill font-mono font-bold text-xs flex items-center justify-center gap-1 transition ${currentCurr === '$' ? 'bg-black text-white' : 'bg-white text-neutral-800 hover:bg-neutral-100'}">
            $ USD
          </button>
          <button type="button" onclick="setCurrency('€')" 
            class="py-2 px-2 border-hard rounded-pill font-mono font-bold text-xs flex items-center justify-center gap-1 transition ${currentCurr === '€' ? 'bg-black text-white' : 'bg-white text-neutral-800 hover:bg-neutral-100'}">
            € EUR
          </button>
          <button type="button" onclick="setCurrency('£')" 
            class="py-2 px-2 border-hard rounded-pill font-mono font-bold text-xs flex items-center justify-center gap-1 transition ${currentCurr === '£' ? 'bg-black text-white' : 'bg-white text-neutral-800 hover:bg-neutral-100'}">
            £ GBP
          </button>
        </div>
      </div>

      <!-- Parameter 3: Cloud Database & Device Key -->
      <div class="p-4 bg-pastel-mint border-hard rounded-card space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-mono-tech text-xs text-emerald-950 font-bold">${t('settingsProfileKeyLabel')}</span>
          <span class="badge-pill bg-white border-hard text-[0.65rem] text-emerald-900 font-bold">${(cloudStatus || 'online').toUpperCase()}</span>
        </div>
        <div class="flex gap-2">
          <input type="text" id="settingsSyncKeyInput" readonly value="${currentProfileId}" class="font-mono text-xs font-bold bg-white" />
          <button onclick="copySettingsSyncKey()" class="btn-secondary btn-pill-small whitespace-nowrap">${t('copyKeyBtn')}</button>
        </div>
        <p class="text-[0.68rem] text-emerald-900 font-medium">
          ${t('settingsProfileKeyHint')}
        </p>
      </div>

      <!-- Parameter 4: Management Actions -->
      <div class="pt-2 border-t-hard flex items-center justify-between gap-2 flex-wrap">
        
        <button onclick="closeModal()" class="btn-primary">
          ${t('closeSettingsBtn')}
        </button>
      </div>

    </div>
  `);
};

window.setLanguage = function(lang) {
  state.language = lang;
  localStorage.setItem(LANG_KEY, lang);
  saveState();
  const m = document.getElementById('activeModalBackdrop');
  if (m) openSettingsModal();
};

window.setCurrency = function(curr) {
  state.currency = curr;
  saveState();
  const m = document.getElementById('activeModalBackdrop');
  if (m) openSettingsModal();
};

window.copySettingsSyncKey = function() {
  const input = document.getElementById('settingsSyncKeyInput');
  if (input) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(input.value);
      } else {
        input.select();
        document.execCommand('copy');
      }
      alert(t('keyCopiedAlert'));
    } catch(err) {
      prompt('Device Sync Key:', input.value);
    }
  }
};

// --- AUTHENTICATION MODAL & LOGIC ---

window.openAuthModal = function(defaultTab = 'signin') {
  currentAuthTab = defaultTab;
  renderAuthModalContent();
};

function renderAuthModalContent(errorMessage = null, successMessage = null) {
  const isSignIn = currentAuthTab === 'signin';
  const isEn = state.language === 'en';
  
  const authScreen = document.getElementById('fullScreenAuth');
  if (!authScreen) return;
  authScreen.innerHTML = `
    <div class="w-full max-w-sm mx-auto p-6 bg-white border-hard rounded-card stacked-sheet">
      <div class="flex items-center pb-3 mb-4 border-b-hard">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-inner border-hard bg-black flex items-center justify-center text-white font-mono font-bold text-xs">
            //
          </div>
          <h3 class="text-xl font-bold">${isEn ? 'Cloud Account' : 'Conta na Nuvem'}</h3>
        </div>
      </div>

    <!-- Neo-Grotesque Segmented Tab Switcher -->
    <div class="flex p-1 bg-[#F3F4F6] border-hard rounded-pill mb-4">
      <button onclick="switchAuthTab('signin')" 
        class="flex-1 py-1.5 text-xs font-bold rounded-pill transition cursor-pointer ${isSignIn ? 'bg-black text-white' : 'text-neutral-600 hover:text-neutral-900'}">
        ${isEn ? 'Sign In' : 'Entrar'}
      </button>
      <button onclick="switchAuthTab('signup')" 
        class="flex-1 py-1.5 text-xs font-bold rounded-pill transition cursor-pointer ${!isSignIn ? 'bg-black text-white' : 'text-neutral-600 hover:text-neutral-900'}">
        ${isEn ? 'Create Account' : 'Criar Conta'}
      </button>
    </div>

    ${errorMessage ? `
      <div class="mb-4 p-3 bg-pastel-peach border-hard rounded-card text-xs text-rose-950 font-bold flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-rose-600"></span>
        <span>${errorMessage}</span>
      </div>
    ` : ''}

    ${successMessage ? `
      <div class="mb-4 p-3 bg-pastel-mint border-hard rounded-card text-xs text-emerald-950 font-bold flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
        <span>${successMessage}</span>
      </div>
    ` : ''}

    <form onsubmit="handleAuthSubmit(event)" class="space-y-3.5 text-sm">
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'EMAIL ADDRESS' : 'ENDEREÇO DE E-MAIL'}</label>
        <input type="email" id="authEmailInput" required placeholder="you@example.com" class="font-mono" />
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'PASSWORD' : 'SENHA'}</label>
        <input type="password" id="authPasswordInput" required minlength="6" placeholder="••••••••" class="font-mono" />
      </div>

      <div class="pt-2">
        <button type="submit" id="authSubmitBtn" class="btn-primary w-full py-2.5">
          ${isSignIn ? (isEn ? 'Sign In to Your Budget' : 'Entrar no Orçamento') : (isEn ? 'Create & Activate Account' : 'Criar e Ativar Conta')}
        </button>
      </div>
    </form>

    <div class="mt-4 pt-3 border-t-hard flex flex-col gap-2 text-center">
      <p class="text-[0.68rem] text-neutral-500 font-mono">
        Supabase Auth — Real-time Cloud Synchronization
      </p>
    </div>
  </div>`;
}

window.switchAuthTab = function(tab) {
  currentAuthTab = tab;
  renderAuthModalContent();
};

window.handleAuthSubmit = async function(e) {
  e.preventDefault();
  if (!supabaseClient) {
    renderAuthModalContent('Supabase client is not connected. Please check network.');
    return;
  }

  const email = document.getElementById('authEmailInput').value.trim();
  const password = document.getElementById('authPasswordInput').value;
  const submitBtn = document.getElementById('authSubmitBtn');

  if (!email || !password) return;

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'AUTHENTICATING...';
  }

  try {
    if (currentAuthTab === 'signup') {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password
      });

      if (error) throw error;

      if (!data.session) {
        const signInRes = await supabaseClient.auth.signInWithPassword({ email, password });
        if (signInRes.error) throw signInRes.error;
        currentUser = signInRes.data.user;
      } else {
        currentUser = data.user;
      }

      currentProfileId = currentUser.id;
      localStorage.setItem(PROFILE_KEY, currentProfileId);

      await syncToSupabase();
      renderAuthHeader();
      closeModal();
      alert(state.language === 'en' ? `Welcome, ${email}! Your account was created.` : `Bem-vindo, ${email}! Sua conta foi criada com sucesso.`);
    } else {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      currentUser = data.user;
      currentProfileId = currentUser.id;
      localStorage.setItem(PROFILE_KEY, currentProfileId);

      renderAuthHeader();
      closeModal();
      await syncFromSupabase();
    }
  } catch (err) {
    console.error('Authentication error:', err);
    renderAuthModalContent(err.message || 'Authentication failed. Please verify credentials.');
  }
};

window.handleSignOut = async function() {
  const msg = state.language === 'en' ? 'Log out of your account?' : 'Deseja sair da sua conta?';
  if (confirm(msg)) {
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }
    currentUser = null;
    currentProfileId = SUPABASE_CONFIG.defaultProfileId;
    localStorage.setItem(PROFILE_KEY, currentProfileId);
    renderAuthHeader();
    await syncFromSupabase();
  }
};

// Modal: Cloud Sync & Device Pairing
window.openCloudSyncModal = function() {
  goToSettings();
};

// Modal: Add/Edit Debt
window.openAddDebtModal = function() {
  openEditDebtModal(null);
};

window.openEditDebtModal = function(debtId) {
  const isEdit = !!debtId;
  const isEn = state.language === 'en';
  const debt = isEdit ? state.debts.find(d => d.id === debtId) : {
    creditor: '',
    type: 'Credit Card',
    originalBalance: 1000,
    monthsOverdue: 12,
    settlementOfferPercent: 30,
    settlementTargetAmount: 300,
    status: 'unpaid',
    notes: ''
  };

  openModal(`
    <div class="flex items-center justify-between pb-3 mb-4 border-b-hard">
      <h3 class="text-xl font-bold">${isEdit ? (isEn ? 'Edit Bank Debt' : 'Editar Dívida') : (isEn ? 'Add Bank / Delinquent Debt' : 'Adicionar Dívida Bancária')}</h3>
      <button onclick="closeModal()" class="text-xl font-bold hover:text-neutral-500">✕</button>
    </div>
    <form onsubmit="handleSaveDebt(event, '${debtId || ''}')" class="space-y-3.5 text-sm">
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Creditor / Bank Name' : 'Credor / Nome do Banco'}</label>
        <input type="text" id="debtCreditor" required value="${debt.creditor}" placeholder="e.g. Itaú, Bradesco, Santander, Nubank" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Debt Category' : 'Tipo de Dívida'}</label>
          <select id="debtType">
            <option value="Credit Card" ${debt.type === 'Credit Card' ? 'selected' : ''}>Cartão de Crédito</option>
            <option value="Bank Loan" ${debt.type === 'Bank Loan' ? 'selected' : ''}>Empréstimo Bancário</option>
            <option value="Overdraft" ${debt.type === 'Overdraft' ? 'selected' : ''}>Cheque Especial / Limite</option>
            <option value="Financing" ${debt.type === 'Financing' ? 'selected' : ''}>Financiamento</option>
            <option value="Other" ${debt.type === 'Other' ? 'selected' : ''}>Outro</option>
          </select>
        </div>
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Months Overdue' : 'Meses em Atraso'}</label>
          <input type="number" id="debtMonths" min="0" value="${debt.monthsOverdue}" placeholder="e.g. 18" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Original Debt Balance' : 'Valor da Dívida Original'}</label>
          <input type="number" id="debtOriginal" required min="1" step="any" value="${debt.originalBalance}" oninput="recalcModalDebtTarget()" />
        </div>
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Target Settlement Payoff' : 'Valor Alvo do Acordo'}</label>
          <input type="number" id="debtTarget" required min="0" step="any" value="${debt.settlementTargetAmount}" />
        </div>
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">Status</label>
        <select id="debtStatus">
          <option value="unpaid" ${debt.status === 'unpaid' ? 'selected' : ''}>Em atraso (Aguardando feirão/negociação)</option>
          <option value="negotiating" ${debt.status === 'negotiating' ? 'selected' : ''}>Negociação em andamento</option>
          <option value="payment_plan" ${debt.status === 'payment_plan' ? 'selected' : ''}>Parcelamento acordado</option>
          <option value="settled" ${debt.status === 'settled' ? 'selected' : ''}>Paga e Quitada integralmente</option>
        </select>
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Strategy / Notes' : 'Estratégia / Observações'}</label>
        <textarea id="debtNotes" rows="2" placeholder="e.g., Aguardar feirão Serasa com 80% de desconto...">${debt.notes || ''}</textarea>
      </div>
      <div class="pt-3 border-t-hard flex justify-end gap-2">
        <button type="button" onclick="closeModal()" class="btn-secondary">${t('cancelBtn')}</button>
        <button type="submit" class="btn-primary">${isEdit ? t('saveBtn') : (isEn ? 'Add Debt' : 'Adicionar Dívida')}</button>
      </div>
    </form>
  `);
};

window.recalcModalDebtTarget = function() {
  const orig = parseFloat(document.getElementById('debtOriginal').value) || 0;
  const targetInput = document.getElementById('debtTarget');
  if (targetInput && orig > 0) {
    targetInput.value = Math.round(orig * 0.3);
  }
};

window.handleSaveDebt = function(e, debtId) {
  e.preventDefault();
  const creditor = document.getElementById('debtCreditor').value.trim();
  const type = document.getElementById('debtType').value;
  const monthsOverdue = parseInt(document.getElementById('debtMonths').value) || 0;
  const originalBalance = parseFloat(document.getElementById('debtOriginal').value) || 0;
  const settlementTargetAmount = parseFloat(document.getElementById('debtTarget').value) || 0;
  const status = document.getElementById('debtStatus').value;
  const notes = document.getElementById('debtNotes').value.trim();

  if (debtId) {
    const existing = state.debts.find(d => d.id === debtId);
    if (existing) {
      Object.assign(existing, { creditor, type, monthsOverdue, originalBalance, settlementTargetAmount, status, notes });
    }
  } else {
    state.debts.push({
      id: 'debt_' + Date.now(),
      creditor,
      type,
      monthsOverdue,
      originalBalance,
      settlementTargetAmount,
      status,
      notes
    });
  }
  closeModal();
  saveState();
};

// Modal: Add/Edit Fixed Payment
window.openAddFixedModal = function() {
  openEditFixedModal(null);
};

window.openEditFixedModal = function(fixedId) {
  const isEdit = !!fixedId;
  const isEn = state.language === 'en';
  const fix = isEdit ? state.fixedPayments.find(f => f.id === fixedId) : {
    name: '',
    category: 'Housing',
    amount: 100,
    dueDay: 10,
    isPaid: false,
    notes: ''
  };

  openModal(`
    <div class="flex items-center justify-between pb-3 mb-4 border-b-hard">
      <h3 class="text-xl font-bold">${isEdit ? (isEn ? 'Edit Fixed Payment' : 'Editar Conta Fixa') : (isEn ? 'Add Fixed Payment' : 'Adicionar Conta Fixa')}</h3>
      <button onclick="closeModal()" class="text-xl font-bold hover:text-neutral-500">✕</button>
    </div>
    <form onsubmit="handleSaveFixed(event, '${fixedId || ''}')" class="space-y-3.5 text-sm">
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Obligation Name' : 'Nome da Conta'}</label>
        <input type="text" id="fixName" required value="${fix.name}" placeholder="e.g. Aluguel, Celular, Psicólogo, Academia" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Category' : 'Categoria'}</label>
          <select id="fixCat">
            <option value="Housing" ${fix.category === 'Housing' ? 'selected' : ''}>Moradia / Aluguel</option>
            <option value="Health" ${fix.category === 'Health' ? 'selected' : ''}>Saúde / Psicólogo / Farmácia</option>
            <option value="Telecom" ${fix.category === 'Telecom' ? 'selected' : ''}>Telefonia / Celular / Internet</option>
            <option value="Utilities" ${fix.category === 'Utilities' ? 'selected' : ''}>Utilidades (Luz, Água, Gás)</option>
            <option value="Transport" ${fix.category === 'Transport' ? 'selected' : ''}>Transporte / Combustível</option>
            <option value="Education" ${fix.category === 'Education' ? 'selected' : ''}>Educação / Cursos</option>
            <option value="Other" ${fix.category === 'Other' ? 'selected' : ''}>Outros</option>
          </select>
        </div>
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Due Day of Month (1-31)' : 'Dia de Vencimento (1-31)'}</label>
          <input type="number" id="fixDue" min="1" max="31" required value="${fix.dueDay}" />
        </div>
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Monthly Amount' : 'Valor Mensal'} (${state.currency})</label>
        <input type="number" id="fixAmount" min="0" step="any" required value="${fix.amount}" />
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Notes' : 'Observações'}</label>
        <input type="text" id="fixNotes" value="${fix.notes || ''}" placeholder="e.g. Débito automático dia 5" />
      </div>
      <div class="pt-3 border-t-hard flex justify-end gap-2">
        <button type="button" onclick="closeModal()" class="btn-secondary">${t('cancelBtn')}</button>
        <button type="submit" class="btn-primary">${isEdit ? t('saveBtn') : t('confirmBtn')}</button>
      </div>
    </form>
  `);
};

window.handleSaveFixed = function(e, fixedId) {
  e.preventDefault();
  const name = document.getElementById('fixName').value.trim();
  const category = document.getElementById('fixCat').value;
  const dueDay = parseInt(document.getElementById('fixDue').value) || 1;
  const amount = parseFloat(document.getElementById('fixAmount').value) || 0;
  const notes = document.getElementById('fixNotes').value.trim();

  if (fixedId) {
    const existing = state.fixedPayments.find(f => f.id === fixedId);
    if (existing) {
      Object.assign(existing, { name, category, dueDay, amount, notes });
    }
  } else {
    state.fixedPayments.push({
      id: 'fix_' + Date.now(),
      name,
      category,
      dueDay,
      amount,
      isPaid: false,
      notes
    });
  }
  closeModal();
  saveState();
};

// Modal: Log Weekend Expense
window.openAddWeekendExpenseModal = function() {
  const activeWk = state.weekendSpending.activeWeekend || 1;
  const today = new Date().toISOString().slice(0, 10);
  const isEn = state.language === 'en';

  openModal(`
    <div class="flex items-center justify-between pb-3 mb-4 border-b-hard">
      <h3 class="text-xl font-bold">${isEn ? 'Log Weekend Spending' : 'Registrar Gasto do Fim de Semana'}</h3>
      <button onclick="closeModal()" class="text-xl font-bold hover:text-neutral-500">✕</button>
    </div>
    <form onsubmit="handleSaveWeekendExpense(event)" class="space-y-3.5 text-sm">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Weekend Number' : 'Fim de Semana'}</label>
          <select id="wkNumber">
            <option value="1" ${activeWk === 1 ? 'selected' : ''}>${t('weekendTab', { num: 1 })}</option>
            <option value="2" ${activeWk === 2 ? 'selected' : ''}>${t('weekendTab', { num: 2 })}</option>
            <option value="3" ${activeWk === 3 ? 'selected' : ''}>${t('weekendTab', { num: 3 })}</option>
            <option value="4" ${activeWk === 4 ? 'selected' : ''}>${t('weekendTab', { num: 4 })}</option>
          </select>
        </div>
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Date' : 'Data'}</label>
          <input type="date" id="wkDate" value="${today}" required />
        </div>
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Description' : 'Descrição do Gasto'}</label>
        <input type="text" id="wkDesc" required placeholder="e.g. Churrasco de sábado, cinema, barzinho, brunch" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Category' : 'Categoria'}</label>
          <select id="wkCat">
            <option value="Dining">Restaurante / Alimentação</option>
            <option value="Entertainment">Lazer / Cinema / Show</option>
            <option value="Drinks">Bares / Bebidas</option>
            <option value="Shopping">Compras / Mimos</option>
            <option value="Transport">Uber / Táxi</option>
            <option value="Other">Outro</option>
          </select>
        </div>
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Amount' : 'Valor'} (${state.currency})</label>
          <input type="number" id="wkAmount" required min="0.1" step="any" placeholder="0.00" />
        </div>
      </div>
      <div class="pt-3 border-t-hard flex justify-end gap-2">
        <button type="button" onclick="closeModal()" class="btn-secondary">${t('cancelBtn')}</button>
        <button type="submit" class="btn-primary">${t('confirmBtn')}</button>
      </div>
    </form>
  `);
};

window.handleSaveWeekendExpense = function(e) {
  e.preventDefault();
  const weekendNumber = parseInt(document.getElementById('wkNumber').value) || 1;
  const date = document.getElementById('wkDate').value;
  const description = document.getElementById('wkDesc').value.trim();
  const category = document.getElementById('wkCat').value;
  const amount = parseFloat(document.getElementById('wkAmount').value) || 0;

  state.weekendSpending.expenses.push({
    id: 'wk_' + Date.now(),
    weekendNumber,
    date,
    description,
    category,
    amount
  });
  closeModal();
  saveState();
};

// Modal: Adjust / Deposit to Keep
window.openKeepAdjustmentModal = function() {
  const today = new Date().toISOString().slice(0, 10);
  const isEn = state.language === 'en';

  openModal(`
    <div class="flex items-center justify-between pb-3 mb-4 border-b-hard">
      <h3 class="text-xl font-bold">${isEn ? 'Deposit / Withdraw from Keep Reserve' : 'Depositar / Retirar da Reserva'}</h3>
      <button onclick="closeModal()" class="text-xl font-bold hover:text-neutral-500">✕</button>
    </div>
    <form onsubmit="handleSaveKeepAdjustment(event)" class="space-y-3.5 text-sm">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Action Type' : 'Tipo de Operação'}</label>
          <select id="keepActionType">
            <option value="deposit">${isEn ? 'Deposit (+ Add to Keep)' : 'Depósito (+ Adicionar à Reserva)'}</option>
            <option value="withdraw">${isEn ? 'Withdraw (- Take from Keep)' : 'Retirada (- Resgatar da Reserva)'}</option>
            <option value="salary_sync">${isEn ? 'Apply Monthly Salary Keep' : 'Aporte do Salário Mensal'}</option>
          </select>
        </div>
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Date' : 'Data'}</label>
          <input type="date" id="keepDate" value="${today}" required />
        </div>
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Amount' : 'Valor'} (${state.currency})</label>
        <input type="number" id="keepAmount" min="0.1" step="any" required placeholder="500.00" />
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Reason / Note' : 'Motivo / Descrição'}</label>
        <input type="text" id="keepNote" placeholder="e.g. Bônus, freelancing, despesa emergencial" />
      </div>
      <div class="pt-3 border-t-hard flex justify-end gap-2">
        <button type="button" onclick="closeModal()" class="btn-secondary">${t('cancelBtn')}</button>
        <button type="submit" class="btn-primary">${t('confirmBtn')}</button>
      </div>
    </form>
  `);
};

window.handleSaveKeepAdjustment = function(e) {
  e.preventDefault();
  const action = document.getElementById('keepActionType').value;
  const date = document.getElementById('keepDate').value;
  const rawAmt = parseFloat(document.getElementById('keepAmount').value) || 0;
  const note = document.getElementById('keepNote').value.trim() || 'Ajuste manual';

  const amount = action === 'withdraw' ? -Math.abs(rawAmt) : Math.abs(rawAmt);
  state.keepAccount.accumulatedBalance += amount;
  state.keepAccount.history.push({
    id: 'k_' + Date.now(),
    date,
    type: action === 'withdraw' ? 'Retirada' : action === 'salary_sync' ? 'Guarda Salarial' : 'Depósito Manual',
    amount,
    note
  });
  closeModal();
  saveState();
};

// Modal: Add / Edit Goal
window.openAddGoalModal = function() {
  openEditGoalModal(null);
};

window.openEditGoalModal = function(goalId) {
  const isEdit = !!goalId;
  const isEn = state.language === 'en';
  const goal = isEdit ? state.goals.find(g => g.id === goalId) : {
    title: '',
    targetAmount: 2000,
    currentAmount: 0,
    monthlyKeepContribution: 200,
    category: 'Geral',
    notes: ''
  };

  openModal(`
    <div class="flex items-center justify-between pb-3 mb-4 border-b-hard">
      <h3 class="text-xl font-bold">${isEdit ? (isEn ? 'Edit Financial Goal' : 'Editar Meta') : (isEn ? 'Add Financial Goal' : 'Criar Nova Meta')}</h3>
      <button onclick="closeModal()" class="text-xl font-bold hover:text-neutral-500">✕</button>
    </div>
    <form onsubmit="handleSaveGoal(event, '${goalId || ''}')" class="space-y-3.5 text-sm">
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Goal Title' : 'Título da Meta'}</label>
        <input type="text" id="goalTitle" required value="${goal.title}" placeholder="e.g. Viagem dos sonhos, Reserva 6 Meses, Carro Novo" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Target Amount' : 'Valor Alvo'} (${state.currency})</label>
          <input type="number" id="goalTarget" required min="1" step="any" value="${goal.targetAmount}" />
        </div>
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Current Saved' : 'Valor Já Guardado'} (${state.currency})</label>
          <input type="number" id="goalCurrent" required min="0" step="any" value="${goal.currentAmount}" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Monthly Keep Allocation' : 'Aporte Mensal da Reserva'}</label>
          <input type="number" id="goalMonthly" min="0" step="any" value="${goal.monthlyKeepContribution}" placeholder="e.g. 250" />
        </div>
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Category' : 'Categoria'}</label>
          <select id="goalCategory">
            <option value="Safety" ${goal.category === 'Safety' ? 'selected' : ''}>Segurança / Emergência</option>
            <option value="Dream Trip" ${goal.category === 'Dream Trip' ? 'selected' : ''}>Viagem / Lazer</option>
            <option value="Asset" ${goal.category === 'Asset' ? 'selected' : ''}>Bens / Patrimônio</option>
            <option value="Equipment" ${goal.category === 'Equipment' ? 'selected' : ''}>Equipamento / Trabalho</option>
            <option value="Education" ${goal.category === 'Education' ? 'selected' : ''}>Educação / Estudos</option>
            <option value="Freedom" ${goal.category === 'Freedom' ? 'selected' : ''}>Quitação de Dívidas</option>
          </select>
        </div>
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Notes' : 'Observações'}</label>
        <textarea id="goalNotes" rows="2" placeholder="Por que essa meta importa...">${goal.notes || ''}</textarea>
      </div>
      <div class="pt-3 border-t-hard flex justify-end gap-2">
        <button type="button" onclick="closeModal()" class="btn-secondary">${t('cancelBtn')}</button>
        <button type="submit" class="btn-primary">${isEdit ? t('saveBtn') : t('confirmBtn')}</button>
      </div>
    </form>
  `);
};

window.handleSaveGoal = function(e, goalId) {
  e.preventDefault();
  const title = document.getElementById('goalTitle').value.trim();
  const targetAmount = parseFloat(document.getElementById('goalTarget').value) || 0;
  const currentAmount = parseFloat(document.getElementById('goalCurrent').value) || 0;
  const monthlyKeepContribution = parseFloat(document.getElementById('goalMonthly').value) || 0;
  const category = document.getElementById('goalCategory').value;
  const notes = document.getElementById('goalNotes').value.trim();

  if (goalId) {
    const existing = state.goals.find(g => g.id === goalId);
    if (existing) {
      Object.assign(existing, { title, targetAmount, currentAmount, monthlyKeepContribution, category, notes });
    }
  } else {
    state.goals.push({
      id: 'goal_' + Date.now(),
      title,
      targetAmount,
      currentAmount,
      monthlyKeepContribution,
      category,
      notes
    });
  }
  closeModal();
  saveState();
};

// Modal: Quick Contribute to Goal from Keep
window.openContributeGoalModal = function(goalId) {
  const goal = state.goals.find(g => g.id === goalId);
  if (!goal) return;
  const maxKeep = state.keepAccount.accumulatedBalance;
  const isEn = state.language === 'en';

  openModal(`
    <div class="flex items-center justify-between pb-3 mb-4 border-b-hard">
      <h3 class="text-xl font-bold">${isEn ? 'Contribute to:' : 'Destinar Fundos para:'} ${goal.title}</h3>
      <button onclick="closeModal()" class="text-xl font-bold hover:text-neutral-500">✕</button>
    </div>
    <form onsubmit="handleConfirmGoalContribution(event, '${goalId}')" class="space-y-3.5 text-sm">
      <div class="p-3 bg-pastel-mint border-hard rounded-card">
        <div class="text-xs font-mono-tech text-emerald-900">${isEn ? 'AVAILABLE KEEP BALANCE' : 'SALDO DISPONÍVEL NA RESERVA'}</div>
        <div class="text-xl font-bold text-emerald-950">${formatCurrency(maxKeep)}</div>
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Contribution Amount' : 'Valor do Aporte'} (${state.currency})</label>
        <input type="number" id="contribAmount" required min="1" max="${maxKeep > 0 ? maxKeep : 999999}" step="any" placeholder="e.g. 200" />
      </div>
      <div>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="deductFromKeep" checked class="custom-checkbox" />
          <span class="text-xs font-medium">${isEn ? 'Deduct automatically from "Money I Can Keep" liquid pool' : 'Descontar automaticamente do saldo da "Reserva Guardada"'}</span>
        </label>
      </div>
      <div class="pt-3 border-t-hard flex justify-end gap-2">
        <button type="button" onclick="closeModal()" class="btn-secondary">${t('cancelBtn')}</button>
        <button type="submit" class="btn-primary">${t('confirmBtn')}</button>
      </div>
    </form>
  `);
};

window.handleConfirmGoalContribution = function(e, goalId) {
  e.preventDefault();
  const goal = state.goals.find(g => g.id === goalId);
  if (!goal) return;
  const amt = parseFloat(document.getElementById('contribAmount').value) || 0;
  const deduct = document.getElementById('deductFromKeep').checked;

  if (amt <= 0) return;
  goal.currentAmount += amt;

  if (deduct) {
    state.keepAccount.accumulatedBalance -= amt;
    state.keepAccount.history.push({
      id: 'k_' + Date.now(),
      date: new Date().toISOString().slice(0, 10),
      type: 'Aporte para Meta',
      amount: -amt,
      note: `Destinado para a meta: ${goal.title}`
    });
  }
  closeModal();
  saveState();
};

// Modal: Add Custom Area
window.openAddCustomAreaModal = function() {
  const isEn = state.language === 'en';
  openModal(`
    <div class="flex items-center justify-between pb-3 mb-4 border-b-hard">
      <h3 class="text-xl font-bold">${isEn ? 'Add Custom Budget Area' : 'Criar Área Personalizada'}</h3>
      <button onclick="closeModal()" class="text-xl font-bold hover:text-neutral-500">✕</button>
    </div>
    <form onsubmit="handleSaveCustomArea(event)" class="space-y-3.5 text-sm">
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Area Name' : 'Nome da Área'}</label>
        <input type="text" id="areaName" required placeholder="e.g. Investimentos, Pets, Cursos" />
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Description' : 'Descrição'}</label>
        <input type="text" id="areaDesc" placeholder="Breve nota sobre o que este orçamento engloba" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Salary Dedication (%)' : 'Dedicação do Salário (%)'}</label>
          <input type="number" id="areaPercent" min="1" max="100" step="1" value="5" required />
        </div>
        <div>
          <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Pastel Theme' : 'Tema Pastel'}</label>
          <select id="areaColor">
            <option value="bg-pastel-mint">Verde Menta Pastel</option>
            <option value="bg-pastel-blue">Azul Céu</option>
            <option value="bg-pastel-yellow">Amarelo Manteiga</option>
            <option value="bg-pastel-periwinkle">Lavanda / Pervinca</option>
            <option value="bg-pastel-peach">Pêssego / Coral</option>
            <option value="bg-pastel-gray">Cinza Neutro</option>
          </select>
        </div>
      </div>
      <div class="pt-3 border-t-hard flex justify-end gap-2">
        <button type="button" onclick="closeModal()" class="btn-secondary">${t('cancelBtn')}</button>
        <button type="submit" class="btn-primary">${t('confirmBtn')}</button>
      </div>
    </form>
  `);
};

window.handleSaveCustomArea = function(e) {
  e.preventDefault();
  const name = document.getElementById('areaName').value.trim();
  const description = document.getElementById('areaDesc').value.trim();
  const percent = parseFloat(document.getElementById('areaPercent').value) || 5;
  const colorBg = document.getElementById('areaColor').value;
  const id = 'custom_' + Date.now();

  const salary = Number(state.salary || 0);
  const amount = Math.round((percent / 100) * salary * 100) / 100;

  state.customAreas.push({
    id,
    name,
    description,
    colorBg,
    items: []
  });

  state.allocations.push({
    id,
    title: name,
    percent,
    amount,
    color: colorBg,
    isSystem: false
  });

  closeModal();
  saveState();
};

// Modal: Add Custom Item inside custom area
window.openAddCustomItemModal = function(areaId) {
  const area = state.customAreas.find(a => a.id === areaId);
  if (!area) return;
  const isEn = state.language === 'en';

  openModal(`
    <div class="flex items-center justify-between pb-3 mb-4 border-b-hard">
      <h3 class="text-xl font-bold">${isEn ? 'Add Item to' : 'Adicionar Item em'} ${area.name}</h3>
      <button onclick="closeModal()" class="text-xl font-bold hover:text-neutral-500">✕</button>
    </div>
    <form onsubmit="handleSaveCustomItem(event, '${areaId}')" class="space-y-3.5 text-sm">
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Item Title' : 'Título do Item'}</label>
        <input type="text" id="custItemName" required placeholder="e.g. Aporte ETF, Ração do Pet, Curso de Inglês" />
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Monthly Cost' : 'Custo Mensal'} (${state.currency})</label>
        <input type="number" id="custItemAmount" required min="1" step="any" placeholder="100.00" />
      </div>
      <div>
        <label class="font-mono-tech text-xs font-bold block mb-1">${isEn ? 'Notes' : 'Observações'}</label>
        <input type="text" id="custItemNotes" placeholder="Opcional" />
      </div>
      <div class="pt-3 border-t-hard flex justify-end gap-2">
        <button type="button" onclick="closeModal()" class="btn-secondary">${t('cancelBtn')}</button>
        <button type="submit" class="btn-primary">${t('confirmBtn')}</button>
      </div>
    </form>
  `);
};

window.handleSaveCustomItem = function(e, areaId) {
  e.preventDefault();
  const area = state.customAreas.find(a => a.id === areaId);
  if (!area) return;
  const name = document.getElementById('custItemName').value.trim();
  const amount = parseFloat(document.getElementById('custItemAmount').value) || 0;
  const notes = document.getElementById('custItemNotes').value.trim();

  area.items.push({
    id: 'it_' + Date.now(),
    name,
    amount,
    notes
  });

  closeModal();
  saveState();
};


window.clearAllData = function() {
  const msg = state.language === 'en' ? 'Clear all data to a blank slate? (Salary 0, empty debts and goals)' : 'Limpar todos os dados do orçamento?';
  if (confirm(msg)) {
    state = {
      language: state.language,
      currency: state.currency,
      salary: 0,
      allocations: [
        { id: 'fixed', title: state.language === 'en' ? 'Fixed Payments' : 'Contas Fixas', percent: 0, amount: 0, color: 'bg-pastel-blue', isSystem: true },
        { id: 'debts', title: state.language === 'en' ? 'Bank Debts' : 'Dívidas Bancárias', percent: 0, amount: 0, color: 'bg-pastel-periwinkle', isSystem: true },
        { id: 'weekend', title: state.language === 'en' ? 'Weekend' : 'Fim de Semana', percent: 0, amount: 0, color: 'bg-pastel-yellow', isSystem: true },
        { id: 'keep', title: state.language === 'en' ? 'Keep Reserve' : 'Reserva Guardada', percent: 0, amount: 0, color: 'bg-pastel-mint', isSystem: true }
      ],
      customAreas: [],
      debts: [],
      fixedPayments: [],
      weekendSpending: { monthlyAllocation: 0, activeWeekend: 1, expenses: [] },
      keepAccount: { accumulatedBalance: 0, history: [] },
      goals: []
    };
    saveState();
  }
};

// Navigation highlight on scroll
function updateNavActiveState() {
  const sections = ['overview', 'debts', 'fixed', 'weekend', 'keep', 'custom', 'goals', 'settings'];
  const scrollPos = window.scrollY + 200;

  sections.forEach(id => {
    const el = document.getElementById(id);
    const navItem = document.querySelector(`.floating-nav-item[href="#${id}"]`);
    if (el && navItem) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        navItem.classList.add('active');
      } else {
        navItem.classList.remove('active');
      }
    }
  });
}

// Initial Listeners
document.addEventListener('DOMContentLoaded', () => {
  const salaryInput = document.getElementById('salaryInput');
  if (salaryInput) {
    salaryInput.addEventListener('input', (e) => {
      state.salary = Math.max(0, parseFloat(e.target.value) || 0);
      recalculateAllocations();
      saveState();
    });
  }

  window.addEventListener('scroll', updateNavActiveState);
  
  // Render initial optimistic cache immediately with translations
  renderApp();

  // Connect to Supabase Cloud & Check Auth
  initSupabase();
});

window.openSalarySplitsModal = function() {
  let localSplits = JSON.parse(JSON.stringify(state.salarySplits || []));

  function renderSplitsModal() {
    const sum = localSplits.reduce((acc, s) => acc + Number(s.percent), 0);
    let errorMsg = '';
    if (sum !== 100) {
      errorMsg = `<div class="bg-red-50 text-red-700 text-xs p-2 rounded-md font-bold mb-3 border border-red-200">
          ${t('splitTotalError', {sum})}
      </div>`;
    }

    const rows = localSplits.map((s, idx) => {
      // Migrate old single discount to the new list format
      if (!s.discountsList) s.discountsList = [];
      if (s.discounts && s.discounts > 0 && s.discountsList.length === 0) {
        s.discountsList.push({ name: 'Desconto Geral', amount: s.discounts });
        s.discounts = 0;
      }

      const discRows = s.discountsList.map((d, dIdx) => `
        <div class="flex items-center gap-1 mb-1">
          <input type="text" value="${d.name}" class="w-full text-[0.65rem] border-hard border-rose-200 bg-rose-50 rounded-inner px-2 py-1.5 font-mono" placeholder="Nome (Ex: FGTS)" onchange="updateDiscount(${idx}, ${dIdx}, 'name', this.value)" />
          <input type="number" value="${d.amount}" min="0" step="10" class="w-20 text-[0.65rem] border-hard border-rose-200 bg-rose-50 rounded-inner px-2 py-1.5 font-mono text-right" placeholder="R$ 0" onchange="updateDiscount(${idx}, ${dIdx}, 'amount', this.value)" />
          <button type="button" onclick="removeDiscount(${idx}, ${dIdx})" class="text-rose-400 hover:text-rose-600 text-xs px-1 font-bold">✕</button>
        </div>
      `).join('');

      return `
        <div class="mb-3 p-3 border-hard rounded-card bg-neutral-50/50">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-16 flex-shrink-0">
              <label class="text-[0.65rem] font-bold text-neutral-500 mb-1 block">${t('splitDayLabel')}</label>
              <input type="number" value="${s.day}" min="1" max="31" class="w-full border-hard rounded-inner p-1.5 text-sm font-mono" onchange="updateTempSplit(${idx}, 'day', this.value)" />
            </div>
            <div class="w-20 flex-shrink-0">
              <label class="text-[0.65rem] font-bold text-neutral-500 mb-1 block">${t('splitPercentLabel')}</label>
              <input type="number" value="${s.percent}" min="0" max="100" class="w-full border-hard rounded-inner p-1.5 text-sm font-mono" onchange="updateTempSplit(${idx}, 'percent', this.value)" />
            </div>
            <div class="flex-1 flex justify-end">
              <button type="button" onclick="removeTempSplit(${idx})" class="p-2 text-neutral-400 hover:text-rose-600 transition text-lg mt-3">✕</button>
            </div>
          </div>
          
          <div class="mt-2 pt-2 border-t-hard border-dashed">
            <div class="flex items-center justify-between mb-1.5">
              <label class="text-[0.65rem] font-bold text-rose-600 block">${state.language === 'en' ? 'Deductions (Optional)' : 'Descontos (Opcional)'}</label>
              <button type="button" onclick="addDiscount(${idx})" class="text-[0.6rem] font-bold text-white bg-rose-600 rounded px-1.5 py-0.5 hover:bg-rose-700">+ Add</button>
            </div>
            ${discRows}
            ${s.discountsList.length === 0 ? `<div class="text-[0.6rem] text-neutral-400 italic">${state.language === 'en' ? 'No deductions on this day.' : 'Sem descontos neste dia.'}</div>` : ''}
          </div>
        </div>
      `;
    }).join('');

    openModal(`
      <div class="flex items-center justify-between pb-3 border-b-hard mb-4">
        <h3 class="font-bold text-lg flex items-center gap-2">📅 ${t('salarySplitsTitle')}</h3>
        <button onclick="closeModal()" class="text-xl hover:text-neutral-500">✕</button>
      </div>
      
      ${errorMsg}

      <div id="splitsRowsContainer" class="max-h-64 overflow-y-auto pr-1">
          ${rows}
      </div>

      <button type="button" onclick="addTempSplit()" class="btn-secondary btn-pill-small w-full mt-3 flex justify-center text-xs">
          ${t('addSplitBtn')}
      </button>

      <div class="pt-4 mt-4 border-t-hard flex justify-end gap-2">
          <button type="button" onclick="closeModal()" class="btn-secondary text-sm">${t('cancelBtn')}</button>
          <button type="button" onclick="saveSplits()" class="btn-primary text-sm" ${sum !== 100 ? 'disabled style="opacity: 0.5"' : ''}>${t('saveBtn')}</button>
      </div>
    `);
  }

  window.updateTempSplit = function(idx, field, val) {
    localSplits[idx][field] = Number(val);
    renderSplitsModal();
  };
  
  window.removeTempSplit = function(idx) {
    localSplits.splice(idx, 1);
    renderSplitsModal();
  };
  
  window.addTempSplit = function() {
    localSplits.push({ id: 'split_' + Date.now(), day: 1, percent: 0, discountsList: [] });
    renderSplitsModal();
  };

  window.addDiscount = function(idx) {
    if (!localSplits[idx].discountsList) localSplits[idx].discountsList = [];
    localSplits[idx].discountsList.push({ name: '', amount: 0 });
    renderSplitsModal();
  };

  window.updateDiscount = function(splitIdx, discIdx, field, val) {
    if (field === 'amount') {
      localSplits[splitIdx].discountsList[discIdx][field] = Number(val);
    } else {
      localSplits[splitIdx].discountsList[discIdx][field] = val;
    }
    renderSplitsModal();
  };

  window.removeDiscount = function(splitIdx, discIdx) {
    localSplits[splitIdx].discountsList.splice(discIdx, 1);
    renderSplitsModal();
  };
  
  window.saveSplits = function() {
    const sum = localSplits.reduce((acc, s) => acc + Number(s.percent), 0);
    if (sum !== 100) return;
    state.salarySplits = localSplits;
    saveState();
    closeModal();
    renderHeroAndAllocationOverview();
    syncToSupabase();
  };

  renderSplitsModal();
};
