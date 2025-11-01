

export interface ToolFeature{
    name: string;
    desc: string;
    icon: string;
}

export interface Tool{
    title: string;
    image:string;
    type: string;
    slug: string;
    url: string;
    main: string;
    price: string;
    features: ToolFeature[];
}

export const tools: Tool[] = [
  {
    image: "/vscode-logo.png",
    title: "Visual Studio Code",
    type: "Integrated Development Environment (IDE)",
    slug: "visual-studio-code",
    url: "https://code.visualstudio.com/",
    main: "Code in any language - VS Code supports JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.",
    price: "Free",
    features: [
      { name: "Integrated terminal", desc: "Use your favorite shell whether it's zsh, pwsh, or git bash, all inside the editor.", icon: "icon-placeholder" },
      { name: "Run code", desc: "Run and debug your code without leaving your editor.", icon: "icon-placeholder" },
      { name: "Version control", desc: "Built-in support for git and many other source control providers.", icon: "icon-placeholder" },
      { name: "Build tasks", desc: "Run tools and analyze their results from within VS Code.", icon: "icon-placeholder" },
      { name: "Local history", desc: "Never lose your changes with automatically tracked local history.", icon: "icon-placeholder" },
      { name: "Themes", desc: "Your theme is an extension of your personality. Add some flair to your editor and add your touch.", icon: "icon-placeholder" },
      { name: "Accessibility", desc: "Optimized experience for screen readers, high contrast themes, and keyboard-only navigation.", icon: "icon-placeholder" },
      { name: "Web support", desc: "Whether you are on your phone, tablet, or desktop, you can access your code from anywhere.", icon: "icon-placeholder" },
      { name: "Agent mode", desc: "Tackle complex, multi-step tasks with intelligent automation that reads your codebase, runs commands, and resolves issues automatically.", icon: "icon-placeholder" },
      { name: "Code with extensions", desc: "Expand VS Code with thousands of extensions for AI, frameworks, databases, and more.", icon: "icon-placeholder" },
    ],
  },
  {
    image: "/git-logo.png",
    title: "Git",
    type: "Version Control System",
    slug: "git",
    url: "https://git-scm.com/",
    main: "Git is a distributed version control system that tracks changes in source code, enabling collaboration and reliable project history management.",
    price: "Free and Open Source",
    features: [
      { name: "Branching", desc: "Create, merge, and manage branches for flexible workflows.", icon: "icon-placeholder" },
      { name: "Commit history", desc: "Track every change with detailed commit messages and diffs.", icon: "icon-placeholder" },
      { name: "Collaboration", desc: "Easily share and merge code changes across teams.", icon: "icon-placeholder" },
      { name: "Rebasing", desc: "Clean and linearize your commit history with advanced tools.", icon: "icon-placeholder" },
    ],
  },
  {
    image: "/github-copilot-logo-icon.webp",
    title: "GitHub Copilot",
    type: "AI Coding Assistant",
    slug: "github-copilot",
    url: "https://github.com/features/copilot",
    main: "GitHub Copilot suggests code completions and functions in real time, powered by advanced AI models trained on billions of lines of code.",
    price: "Subscription",
    features: [
      { name: "Smart autocompletion", desc: "Receive intelligent code suggestions as you type.", icon: "icon-placeholder" },
      { name: "Function generation", desc: "Automatically generate entire functions or test cases.", icon: "icon-placeholder" },
      { name: "Code explanation", desc: "Understand unfamiliar code through natural language insights.", icon: "icon-placeholder" },
      { name: "Multi-language support", desc: "Works across many languages including JavaScript, Python, and Java.", icon: "icon-placeholder" },
    ],
  },
  {
    image: "/jira-logo.png",
    title: "Jira",
    type: "Project Management Software",
    slug: "jira",
    url: "https://www.atlassian.com/software/jira",
    main: "Jira helps teams plan, track, and manage agile software projects with boards, roadmaps, and customizable workflows.",
    price: "Freemium",
    features: [
      { name: "Agile boards", desc: "Plan and visualize work with Kanban and Scrum boards.", icon: "icon-placeholder" },
      { name: "Issue tracking", desc: "Track tasks, bugs, and sprints in one place.", icon: "icon-placeholder" },
      { name: "Reports & analytics", desc: "Generate performance and sprint reports to track progress.", icon: "icon-placeholder" },
      { name: "Integrations", desc: "Connect with GitHub, Slack, and hundreds of developer tools.", icon: "icon-placeholder" },
    ],
  },
  {
    image: "/node-js.png",
    title: "Node.js",
    type: "Runtime Environment",
    slug: "node-js",
    url: "https://nodejs.org/",
    main: "Node.js enables fast, scalable network applications using JavaScript on the server side, powered by the V8 engine.",
    price: "Free and Open Source",
    features: [
      { name: "Non-blocking I/O", desc: "Handles thousands of concurrent connections efficiently.", icon: "icon-placeholder" },
      { name: "NPM ecosystem", desc: "Access millions of packages from the Node Package Manager.", icon: "icon-placeholder" },
      { name: "Cross-platform", desc: "Develop once and deploy across different operating systems.", icon: "icon-placeholder" },
      { name: "Event-driven", desc: "Build responsive apps with asynchronous architecture.", icon: "icon-placeholder" },
    ],
  },
  {
    image: "/Oracle-logo.webp",
    title: "Oracle SQL Developer",
    type: "Database Management Tool",
    slug: "oracle-sql-developer",
    url: "https://www.oracle.com/database/sqldeveloper/",
    main: "A powerful IDE for working with Oracle databases, offering tools for SQL development, database design, and performance tuning.",
    price: "Free",
    features: [
      { name: "Query builder", desc: "Design and execute SQL queries visually or with code.", icon: "icon-placeholder" },
      { name: "Database browsing", desc: "Explore schemas, tables, and relationships intuitively.", icon: "icon-placeholder" },
      { name: "Data export", desc: "Easily export and import data in multiple formats.", icon: "icon-placeholder" },
      { name: "Performance tuning", desc: "Analyze and optimize SQL query execution plans.", icon: "icon-placeholder" },
    ],
  },
  {
    image: "/aws-logo.webp",
    title: "Amazon Web Services (AWS)",
    type: "Cloud Computing Platform",
    slug: "amazon-web-services",
    url: "https://aws.amazon.com/",
    main: "AWS provides scalable cloud infrastructure and services for compute, storage, databases, and AI — powering millions of applications globally.",
    price: "Pay-as-you-go",
    features: [
      { name: "Compute services", desc: "Run scalable applications with EC2 and Lambda.", icon: "icon-placeholder" },
      { name: "Storage", desc: "Securely store and access data using S3 or EBS.", icon: "icon-placeholder" },
      { name: "Database", desc: "Deploy managed databases like RDS and DynamoDB.", icon: "icon-placeholder" },
      { name: "Global availability", desc: "Leverage data centers around the world for reliability.", icon: "icon-placeholder" },
    ],
  },
  {
    image: "/docker-logo.png",
    title: "Docker",
    type: "Containerization Platform",
    slug: "docker",
    url: "https://www.docker.com/",
    main: "Docker allows developers to package applications and their dependencies into lightweight, portable containers for consistent deployment.",
    price: "Free (with paid plans)",
    features: [
      { name: "Containerization", desc: "Package applications with all their dependencies.", icon: "icon-placeholder" },
      { name: "Portability", desc: "Run containers across environments without compatibility issues.", icon: "icon-placeholder" },
      { name: "Docker Hub", desc: "Access prebuilt images from the global community.", icon: "icon-placeholder" },
      { name: "Integration", desc: "Integrates with CI/CD pipelines for automated deployments.", icon: "icon-placeholder" },
    ],
  },
  {
    image: "/jenkins-logo.png",
    title: "Jenkins",
    type: "Automation Server",
    slug: "jenkins",
    url: "https://www.jenkins.io/",
    main: "Jenkins automates building, testing, and deploying software with a vast plugin ecosystem supporting continuous integration and delivery.",
    price: "Free and Open Source",
    features: [
      { name: "Pipeline automation", desc: "Automate builds, tests, and deployments with simple scripts.", icon: "icon-placeholder" },
      { name: "Extensible plugins", desc: "Enhance functionality with thousands of community plugins.", icon: "icon-placeholder" },
      { name: "Continuous integration", desc: "Detect code changes and trigger automated workflows.", icon: "icon-placeholder" },
      { name: "Distributed builds", desc: "Run jobs across multiple machines for scalability.", icon: "icon-placeholder" },
    ],
  },
];