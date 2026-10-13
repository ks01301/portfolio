// 사이트에 보이는 모든 내용은 이 파일에 있습니다.
// 지금 들어 있는 값은 전부 예시이니 본인 내용으로 바꿔 주세요.

export const profile = {
  name: '홍길동',
  headline: '안녕하세요, 엔지니어 홍길동입니다',
  intro:
    '코드 작성부터 배포, 운영까지 직접 해 봤습니다. 아래 구성도는 홈랩과 프로젝트에서 실제로 운영한 구조입니다. 노드를 눌러 어떤 일을 했는지 보고, 직접 내려 보세요.',
  email: 'you@example.com',
  github: 'https://github.com/your-id',
  blog: 'https://your-blog.example.com',
  // public 폴더에 resume.pdf를 넣으면 연결됩니다.
  resume: '/resume.pdf',
  location: '서울',
  description: '엔지니어 홍길동의 포트폴리오',
};

// ── 구성도 ──────────────────────────────────────────────
// x, y는 노드 중심 좌표입니다 (캔버스 900 × 390).
// killable이 true인 노드는 방문자가 내려 볼 수 있습니다.
// id는 구성도 동작과 연결되어 있으니 바꾸지 마세요.

export type TopoNode = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  title: string;
  body: string;
  tools: string[];
  project?: string;
  killable?: boolean;
};

export const nodes: TopoNode[] = [
  {
    id: 'user',
    x: 80,
    y: 150,
    label: '사용자',
    sub: '브라우저',
    title: '사용자 요청',
    body: '모든 요청은 여기서 출발합니다. 부하 테스트로 실제 트래픽을 흉내 내고, 어디서 먼저 느려지는지 확인했습니다.',
    tools: ['k6', 'curl', 'Chrome DevTools'],
  },
  {
    id: 'edge',
    x: 250,
    y: 150,
    label: 'DNS · CDN',
    sub: 'Cloudflare',
    title: 'DNS와 CDN',
    body: '도메인과 TLS 인증서를 관리하고 정적 파일을 캐시했습니다. 인증서 만료로 사이트가 내려간 뒤 갱신을 자동화했습니다.',
    tools: ['Cloudflare', 'cert-manager', "Let's Encrypt"],
    project: 'homelab',
  },
  {
    id: 'lb',
    x: 420,
    y: 150,
    label: 'Ingress',
    sub: 'Nginx',
    title: '로드 밸런서',
    body: '들어온 요청을 살아 있는 인스턴스로만 나눠 보냅니다. 헬스 체크 주기와 타임아웃을 조정해 배포 중 502 응답을 없앴습니다.',
    tools: ['Nginx Ingress', 'MetalLB', 'AWS ALB'],
    project: 'deploy',
    killable: true,
  },
  {
    id: 'app1',
    x: 610,
    y: 80,
    label: '앱 인스턴스 1',
    sub: 'Kubernetes Pod',
    title: '애플리케이션',
    body: '직접 만든 API 서버를 컨테이너로 올렸습니다. 인스턴스 하나가 죽어도 다른 쪽이 요청을 받도록 두 개 이상을 유지합니다.',
    tools: ['Go', 'Docker', 'Kubernetes', 'Helm'],
    project: 'homelab',
    killable: true,
  },
  {
    id: 'app2',
    x: 610,
    y: 220,
    label: '앱 인스턴스 2',
    sub: 'Kubernetes Pod',
    title: '애플리케이션',
    body: '인스턴스 1과 같은 이미지입니다. readiness probe가 통과해야 트래픽을 받도록 설정해 준비 안 된 파드로 요청이 가지 않게 했습니다.',
    tools: ['Go', 'Docker', 'Kubernetes', 'Helm'],
    project: 'homelab',
    killable: true,
  },
  {
    id: 'dbp',
    x: 820,
    y: 80,
    label: 'DB 1',
    sub: 'PostgreSQL',
    title: '데이터베이스',
    body: '스트리밍 복제로 두 대를 묶었습니다. primary가 응답하지 않으면 replica가 승격해 쓰기를 이어받습니다.',
    tools: ['PostgreSQL', 'Patroni', 'pgBackRest'],
    project: 'terraform',
    killable: true,
  },
  {
    id: 'dbr',
    x: 820,
    y: 220,
    label: 'DB 2',
    sub: 'PostgreSQL',
    title: '데이터베이스',
    body: '평소에는 primary의 변경을 따라가며 대기합니다. 매일 새벽 백업을 받고, 한 달에 한 번 복구 연습을 했습니다.',
    tools: ['PostgreSQL', 'Patroni', 'pgBackRest'],
    project: 'terraform',
    killable: true,
  },
  {
    id: 'ci',
    x: 420,
    y: 335,
    label: '배포 파이프라인',
    sub: 'GitHub Actions, Argo CD',
    title: 'CI/CD',
    body: '코드를 올리면 테스트, 이미지 빌드, 배포가 이어집니다. 클러스터 상태는 Git 저장소를 기준으로 맞추고, 문제가 생기면 커밋 하나로 되돌립니다.',
    tools: ['GitHub Actions', 'Argo CD', 'Argo Rollouts', 'Trivy'],
    project: 'deploy',
  },
  {
    id: 'mon',
    x: 820,
    y: 335,
    label: '모니터링',
    sub: 'Prometheus, Grafana',
    title: '관측',
    body: '지표와 로그를 한곳에 모으고 알림 규칙을 만들었습니다. 알림이 너무 자주 울리지 않도록 증상 기준으로 다시 정리했습니다.',
    tools: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager'],
    project: 'homelab',
  },
];

// ── 경력 ────────────────────────────────────────────────
// 최근 것이 위로 오게 적습니다.

export const experience = [
  {
    company: '○○테크',
    role: '인프라팀 인턴',
    period: '2025.12 – 2026.05',
    summary: '사내 서비스 40여 개가 올라간 쿠버네티스 클러스터 운영을 도왔습니다.',
    work: [
      '수동으로 하던 노드 OS 패치를 Ansible 플레이북으로 옮겨 작업 시간을 4시간에서 40분으로 단축',
      '알림 규칙 120개를 검토해 중복과 오탐을 정리, 주간 알림 수를 절반으로 줄임',
      '신규 입사자용 클러스터 접근 가이드 작성',
    ],
    stack: ['Kubernetes', 'Ansible', 'Prometheus', 'AWS'],
  },
  {
    company: '○○대학교 전산실',
    role: '서버 관리 근로 장학생',
    period: '2024.03 – 2025.02',
    summary: '학과 실습용 리눅스 서버 12대의 계정, 백업, 장애 대응을 맡았습니다.',
    work: [
      '학기마다 300개 넘는 계정을 만들던 작업을 셸 스크립트로 자동화',
      '야간 백업을 구성하고 학기에 한 번 복구 테스트',
      '디스크 장애와 네트워크 문제를 1차 대응하고 처리 내용을 문서로 기록',
    ],
    stack: ['Linux', 'Bash', 'rsync', 'NFS'],
  },
];

// ── 프로젝트 ────────────────────────────────────────────

export const projects = [
  {
    id: 'homelab',
    title: '홈랩 쿠버네티스 클러스터',
    period: '2025.03 – 운영 중',
    summary: '미니 PC 세 대로 클러스터를 꾸리고 개인 서비스 여섯 개를 올려 운영합니다.',
    problem:
      '클라우드 콘솔에서 버튼만 눌러서는 네트워크와 스토리지가 어떻게 동작하는지 알 수 없었습니다. 장애를 직접 겪어 볼 환경이 필요했습니다.',
    work: [
      'k3s로 컨트롤 플레인 3대 구성, etcd 스냅샷을 외부 스토리지에 백업',
      'Argo CD로 모든 매니페스트를 Git에서 관리',
      'Prometheus, Grafana, Loki로 지표와 로그 수집, 알림은 메신저로 전달',
      'WireGuard로 외부 접속 경로를 하나로 제한',
    ],
    result: '18개월 동안 계획에 없던 중단은 세 번, 모두 기록으로 남겼습니다.',
    stack: ['k3s', 'Argo CD', 'Prometheus', 'Longhorn', 'WireGuard'],
    link: 'https://github.com/your-id/homelab',
  },
  {
    id: 'deploy',
    title: '무중단 배포 파이프라인',
    period: '2025.09 – 2025.12',
    summary: '팀 프로젝트의 수동 배포를 자동화해 배포 시간을 12분에서 4분으로 줄였습니다.',
    problem:
      '배포할 때마다 서버에 접속해 명령어를 순서대로 입력했고, 그동안 서비스가 30초가량 끊겼습니다. 순서를 틀려 롤백한 적도 있었습니다.',
    work: [
      'GitHub Actions로 테스트, 이미지 빌드, 취약점 검사를 한 흐름으로 연결',
      'Argo Rollouts로 블루/그린 배포를 적용하고 헬스 체크 실패 시 자동 롤백',
      '빌드 캐시와 멀티 스테이지 빌드로 이미지 크기를 1.1GB에서 140MB로 축소',
    ],
    result: '4개월 동안 62번 배포했고 배포로 인한 중단은 없었습니다.',
    stack: ['GitHub Actions', 'Argo Rollouts', 'Docker', 'Trivy'],
    link: 'https://github.com/your-id/deploy-pipeline',
  },
  {
    id: 'terraform',
    title: 'AWS 3계층 인프라 코드화',
    period: '2025.06 – 2025.08',
    summary: '콘솔에서 손으로 만들던 인프라를 Terraform 모듈로 옮겼습니다.',
    problem:
      '누가 무엇을 바꿨는지 기록이 없어 개발 환경과 운영 환경이 조금씩 달라졌고, 같은 환경을 다시 만드는 데 하루가 걸렸습니다.',
    work: [
      'VPC, ALB, Auto Scaling 그룹, RDS를 모듈로 나누고 환경별 변수만 다르게 적용',
      '상태 파일은 S3에 두고 잠금을 걸어 동시 수정 방지',
      'PR마다 plan 결과를 댓글로 남겨 변경 내용을 리뷰',
    ],
    result: '새 환경을 만드는 시간이 하루에서 15분으로 줄었습니다.',
    stack: ['Terraform', 'AWS', 'GitHub Actions'],
    link: 'https://github.com/your-id/aws-infra',
  },
  {
    id: 'cli',
    title: '서버 점검 자동화 도구',
    period: '2025.01 – 2025.02',
    summary: '여러 서버의 상태를 한 번에 확인하는 CLI를 Go로 만들었습니다.',
    problem:
      '서버마다 접속해 디스크, 메모리, 인증서 만료일을 확인하는 데 매주 한 시간씩 썼습니다.',
    work: [
      'SSH로 여러 서버에 동시에 접속해 점검 항목을 수집',
      '점검 항목을 YAML로 정의해 코드를 고치지 않고 추가',
      '결과를 표와 JSON으로 출력하고 기준을 넘으면 종료 코드로 알림',
    ],
    result: '주간 점검이 한 시간에서 명령어 한 줄로 바뀌었습니다.',
    stack: ['Go', 'SSH', 'YAML'],
    link: 'https://github.com/your-id/srvcheck',
  },
];

// ── 트러블슈팅 기록 ─────────────────────────────────────

export const incidents = [
  {
    title: '디스크가 가득 차 클러스터가 멈춤',
    date: '2025.07',
    duration: '중단 2시간 10분',
    cause: '컨테이너 로그가 제한 없이 쌓여 루트 디스크가 가득 찼고, etcd가 쓰기를 거부했습니다.',
    fix: '오래된 로그를 지워 공간을 확보한 뒤 etcd를 다시 시작했습니다.',
    prevent: '로그 크기와 보관 개수를 제한하고, 디스크 사용률이 80%를 넘으면 알림이 오도록 했습니다.',
  },
  {
    title: '인증서 만료로 접속 불가',
    date: '2025.10',
    duration: '중단 40분',
    cause: '수동으로 발급한 인증서의 갱신 날짜를 놓쳤습니다.',
    fix: '인증서를 새로 발급해 교체했습니다.',
    prevent: 'cert-manager로 갱신을 자동화하고, 만료 14일 전에 알림을 받도록 했습니다.',
  },
  {
    title: '파드가 반복해서 재시작됨',
    date: '2026.02',
    duration: '중단 없음, 응답 지연',
    cause: '메모리 제한이 실제 사용량보다 낮아 트래픽이 몰릴 때마다 OOMKilled가 발생했습니다.',
    fix: '일주일 치 사용량을 보고 requests와 limits를 다시 정했습니다.',
    prevent: '재시작 횟수 알림을 추가하고, 새 서비스는 부하 테스트 후 값을 정하도록 했습니다.',
  },
];

// ── 기술 ────────────────────────────────────────────────
// level: run = 직접 운영, used = 프로젝트에 사용, learning = 학습 중

export const levels = [
  { id: 'run', label: '직접 운영' },
  { id: 'used', label: '프로젝트에 사용' },
  { id: 'learning', label: '학습 중' },
] as const;

export const skillGroups = [
  {
    name: '개발',
    skills: [
      { name: 'Go', level: 'used' },
      { name: 'Python', level: 'used' },
      { name: 'Bash', level: 'run' },
      { name: 'TypeScript', level: 'used' },
      { name: 'SQL', level: 'used' },
    ],
  },
  {
    name: '컨테이너',
    skills: [
      { name: 'Docker', level: 'run' },
      { name: 'Kubernetes', level: 'run' },
      { name: 'Helm', level: 'used' },
      { name: 'Istio', level: 'learning' },
    ],
  },
  {
    name: '자동화',
    skills: [
      { name: 'GitHub Actions', level: 'run' },
      { name: 'Argo CD', level: 'run' },
      { name: 'Terraform', level: 'used' },
      { name: 'Ansible', level: 'used' },
    ],
  },
  {
    name: '클라우드 · 네트워크',
    skills: [
      { name: 'AWS', level: 'used' },
      { name: 'Nginx', level: 'run' },
      { name: 'DNS, TLS', level: 'run' },
      { name: 'WireGuard', level: 'run' },
      { name: 'eBPF', level: 'learning' },
    ],
  },
  {
    name: '시스템',
    skills: [
      { name: 'Linux (Ubuntu, Rocky)', level: 'run' },
      { name: 'systemd', level: 'run' },
      { name: 'PostgreSQL', level: 'used' },
      { name: 'Redis', level: 'used' },
    ],
  },
  {
    name: '관측',
    skills: [
      { name: 'Prometheus', level: 'run' },
      { name: 'Grafana', level: 'run' },
      { name: 'Loki', level: 'used' },
      { name: 'OpenTelemetry', level: 'learning' },
    ],
  },
];

// ── 학력과 자격증 ────────────────────────────────────────────────

export const timeline = [
  { when: '2026.08', what: 'CKA (Certified Kubernetes Administrator) 취득', where: 'CNCF' },
  { when: '2026.02', what: '컴퓨터공학과 졸업', where: '○○대학교' },
  { when: '2025.11', what: 'AWS Solutions Architect Associate 취득', where: 'AWS' },
  { when: '2025.07', what: '클라우드 엔지니어링 부트캠프 수료', where: '○○ 아카데미, 6개월' },
  { when: '2025.05', what: '정보처리기사 취득', where: '한국산업인력공단' },
  { when: '2024.09', what: '리눅스마스터 1급 취득', where: 'KAIT' },
];
