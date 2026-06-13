export type TechCategory = {
  category: string;
  dir: string; // folder under /assets/images/technology/logo
  items: { name: string; file: string }[];
};

const base = "/assets/images/technology/logo";

const make = (
  category: string,
  dir: string,
  items: [string, string][],
): TechCategory => ({
  category,
  dir,
  items: items.map(([name, file]) => ({ name, file: `${base}/${dir}/${file}.svg` })),
});

export const techStack: TechCategory[] = [
  make("Programming (Framework)", "programming", [
    ["Next.js", "nextjs"],
    ["React", "reactjs"],
    ["Vue", "vue"],
    ["JavaScript", "javascript"],
    ["jQuery", "jquery"],
    ["Bootstrap", "bootstrap"],
    ["Tailwind", "tailwind"],
    ["CSS", "css"],
    ["PHP", "php"],
    ["Laravel", "laravel"],
    ["Golang", "golang"],
    ["Gin", "gin"],
    ["Java", "java"],
    ["C#", "csharp"],
    [".NET", "net"],
    ["VB.NET", "vbnet"],
    ["CodeIgniter", "cigr"],
    ["Kotlin", "kotlin"],
    ["Dart", "dart"],
    ["Flutter", "flutter"],
  ]),
  make("Database", "database", [
    ["PostgreSQL", "postgresql"],
    ["MySQL", "mysql"],
    ["MongoDB", "mongodb"],
    ["Redis", "redis"],
    ["ClickHouse", "clickhouse"],
  ]),
  make("CI/CD", "ci-cd", [
    ["GitHub Actions", "github-actions"],
    ["GitLab", "gitlab"],
    ["Jenkins", "jenkins"],
  ]),
  make("Security & Compliance", "security-and-compliance", [
    ["Burp Suite", "burpsuite"],
    ["Fail2ban", "fail2ban"],
    ["Greenbone", "greenbone"],
    ["ModSecurity", "modsecurity"],
    ["OWASP", "owasp"],
    ["Suricata", "suricata"],
  ]),
  make("Monitoring", "monitoring", [
    ["Datadog", "datadog"],
    ["Grafana", "grafana"],
    ["Prometheus", "prometheus"],
  ]),
  make("Code Quality & Security Analysis", "code-quality-and-security-analysis", [
    ["CodeRabbit", "coderabbit"],
    ["Semgrep", "semgrep"],
    ["SonarQube", "sonarqube"],
  ]),
  make("Container", "container", [["Docker", "docker"]]),
  make("Message Queue", "message-queue", [["RabbitMQ", "rabbitmq"]]),
  make("Automation Test", "automation-test", [["Selenium", "selenium"]]),
];
