// 사이트에 보이는 모든 내용은 이 파일에 있습니다.

export const profile = {
  name: '김강산',
  // 첫 화면의 큰 제목 두 줄입니다. 아래 줄은 외곽선 글자로 표시됩니다.
  titleTop: '김강산',
  titleBottom: 'PORTFOLIO',
  greeting: '안녕하세요, 김강산입니다.',
  intro:
    '9년 동안 서버와 네트워크 운영, 솔루션 기술지원, 웹 서비스 개발을 맡아 왔습니다. 지금은 Proxmox 서버 5대에 VM 27대를 구성해 운영하면서, Go와 React로 파일 관리 서비스를 만들고 있습니다. 내일이 아닌 1년 뒤, 10년 뒤를 바라보고 일합니다.',
  careerYears: '총 9년',
  email: 'kks01301@naver.com',
  location: '서울',
  description: '김강산의 포트폴리오. 서버와 네트워크 운영, 솔루션 기술지원, 웹 서비스 개발 경력을 소개합니다.',
};

// ── 첫 화면 아래 하는 일 카드 ───────────────────────────
// href는 누르면 이동할 위치입니다.

export const focus = [
  {
    title: '서비스 개발',
    body: 'Go와 React로 파일 관리 서비스를, NestJS와 Flutter로 AI 입찰 공고 분석 서비스를 만들었습니다. IBM Aspera 연동과 기술지원도 맡고 있습니다.',
    link: '대표 프로젝트 보기',
    href: '#project-files',
  },
  {
    title: 'CI, 릴리즈, 모니터링',
    body: 'GitHub Actions로 검증부터 Harbor 이미지 푸시, GitHub Release 발행까지 이어지는 흐름을 구성했습니다. Prometheus와 Grafana로 모니터링 시스템도 구축했습니다.',
    link: 'CI와 릴리즈 구성 보기',
    href: '#ci',
  },
  {
    title: '가상화와 Kubernetes',
    body: 'Proxmox 서버 5대에 VM 27대를 구성했습니다. Talos Kubernetes 클러스터는 Argo CD로 GitOps 방식으로 관리합니다.',
    link: '인프라 구성도 보기',
    href: '#infra',
  },
];

// ── 인프라 구성도 ───────────────────────────────────────
// 실제 Proxmox 구성을 정리한 내용입니다. 공개 페이지라 서버와 VM의 실제 이름은 넣지 않습니다.
// vms는 칸 수로 그려지고, tag는 위쪽 필터와 연결됩니다.

export const infraTags = ['Docker', '파일 전송', 'Kubernetes', 'Git Runner', '개발, 테스트'];

export const infra = {
  cluster: 'Proxmox VE 클러스터',
  hosts: [
    { name: '사내 서버', count: 2 },
    { name: '서비스 서버', count: 3 },
  ],
  zones: [
    {
      name: '서비스 영역',
      note: 'VM 8대',
      groups: [
        {
          id: 'svc-docker',
          tag: 'Docker',
          title: 'Docker 서버',
          vms: 2,
          os: ['Rocky Linux'],
          body: '서비스용 컨테이너를 실행하는 VM 2대입니다.',
        },
        {
          id: 'svc-transfer',
          tag: '파일 전송',
          title: '파일 전송 서버',
          vms: 6,
          os: ['Rocky Linux', 'CentOS'],
          body: '서비스 3개에 파일 전송 VM을 2대씩 구성했습니다. Rocky Linux와 CentOS를 각각 3대씩 운영합니다.',
        },
      ],
    },
    {
      name: '사내 영역',
      note: 'VM 9대',
      groups: [
        {
          id: 'in-docker',
          tag: 'Docker',
          title: 'Docker 서버',
          vms: 3,
          os: ['Rocky Linux'],
          body: '사내용 Docker VM 3대입니다. 이 중 1대는 개발용으로 씁니다.',
        },
        {
          id: 'in-transfer',
          tag: '파일 전송',
          title: '파일 전송 서버',
          vms: 2,
          os: ['Rocky Linux'],
          body: '사내 파일 전송 VM 2대입니다. 1대는 테스트용입니다.',
        },
        {
          id: 'in-runner',
          tag: 'Git Runner',
          title: 'Git Runner',
          vms: 2,
          os: ['Rocky Linux'],
          body: 'GitHub Actions의 CI와 릴리즈 작업을 실행하는 self-hosted Runner VM 2대입니다.',
        },
        {
          id: 'in-dev',
          tag: '개발, 테스트',
          title: '개발 서버',
          vms: 1,
          os: ['Rocky Linux'],
          body: '개발용 VM입니다.',
        },
        {
          id: 'in-proxy',
          tag: '개발, 테스트',
          title: '프록시 테스트',
          vms: 1,
          os: ['Rocky Linux'],
          body: '프록시 구성을 시험하는 테스트 VM입니다.',
        },
      ],
    },
    {
      name: 'Kubernetes 영역',
      note: 'VM 10대, Talos',
      groups: [
        {
          id: 'k8s-control',
          tag: 'Kubernetes',
          title: '컨트롤 플레인',
          vms: 5,
          os: ['Talos'],
          body: 'Talos로 구성한 Kubernetes 컨트롤 플레인 5대입니다.',
        },
        {
          id: 'k8s-worker',
          tag: 'Kubernetes',
          title: '워커 노드',
          vms: 5,
          os: ['Talos'],
          body: '같은 클러스터의 워커 노드 5대입니다.',
        },
      ],
    },
  ],
  templates: {
    title: 'VM 템플릿 5개',
    items: ['Rocky Linux 9.8 (2개)', 'Amazon Linux 2023', 'CentOS 7', 'Talos'],
    body: '운영체제별 템플릿을 만들어 두고 새 VM을 만들 때 씁니다.',
  },
};

// ── GitHub Actions CI와 릴리즈 ──────────────────────────
// 실제 실행 기록 한 건씩을 옮긴 내용입니다. 저장소 이름과 제품명은 넣지 않습니다.
// stages는 왼쪽부터 순서대로 그려지고, 같은 단계의 잡은 병렬로 실행됩니다.

export const ci = {
  workflow: 'CI: Pull Request마다 실행',
  facts: ['잡 22개', 'self-hosted Runner', '변경 범위에 따라 검사 선택', '백엔드 테스트 31개 묶음을 6개로 분할', '실행 1회 13분'],
  stages: [
    {
      title: '범위 확인과 보안 검사',
      groups: [
        { jobs: [{ name: 'CI scope', time: '32초' }, { name: 'Product version', time: '23초' }] },
        {
          label: 'Security',
          jobs: [
            { name: 'agent', time: '25초' },
            { name: 'backend', time: '1분 8초' },
            { name: 'frontend', time: '40초' },
          ],
        },
      ],
    },
    {
      title: '준비와 프론트엔드 검사',
      groups: [
        {
          jobs: [
            { name: 'Agent shared backend binary', time: '37초' },
            { name: 'Backend test discovery', time: '20초' },
            { name: 'Agent test and vet', time: '50초' },
          ],
        },
        {
          label: 'Frontend',
          jobs: [
            { name: 'api-codegen', time: '1분' },
            { name: 'build', time: '1분 3초' },
            { name: 'checks', time: '3분 3초' },
            { name: 'storybook', time: '2분 33초' },
          ],
        },
      ],
    },
    {
      title: '백엔드 빌드와 분할 테스트',
      groups: [
        {
          label: 'Backend',
          jobs: [
            { name: 'api-codegen', time: '40초' },
            { name: 'vet-build', time: '2분 44초' },
          ],
        },
        {
          label: 'Backend tests',
          jobs: [
            { name: 'shard 1', time: '7분 34초' },
            { name: 'shard 2', time: '1분 51초' },
            { name: 'shard 3', time: '2분 16초' },
            { name: 'shard 4', time: '2분 10초' },
            { name: 'shard 5', time: '2분 54초' },
            { name: 'shard 6', time: '2분 22초' },
          ],
        },
      ],
    },
    {
      title: '결과 확인',
      groups: [{ jobs: [{ name: 'Backend test', time: '10초' }, { name: 'verify', time: '17초' }] }],
    },
  ],
};

export const release = {
  workflow: '릴리즈: main 브랜치에서 수동 실행',
  facts: ['잡 23개', 'CI 워크플로 재사용', '버전 커밋과 태그 생성', '실행 1회 13분 37초'],
  stages: [
    { title: '실행 조건 확인', groups: [{ jobs: [{ name: 'guard', time: '12초' }] }] },
    { title: '코드 검증', groups: [{ jobs: [{ name: 'validate', time: '잡 19개' }] }] },
    { title: '버전 발행', groups: [{ jobs: [{ name: 'publish', time: '19초' }] }] },
    { title: '이미지 빌드와 푸시', groups: [{ jobs: [{ name: 'Harbor image', time: '4분 8초' }] }] },
    { title: '릴리즈 발행', groups: [{ jobs: [{ name: 'GitHub Release', time: '22초' }] }] },
  ],
};

// ── 경력 ────────────────────────────────────────────────
// 최근 것이 위로 오게 적습니다. open이 true면 주요 업무가 펼쳐진 채로 보입니다.

export const experience = [
  {
    company: '케이엔피플',
    badge: '재직 중',
    team: 'IT사업부',
    period: '2019.12 – 현재',
    summary: '시스템 운영 및 관리(서버, 네트워크 등), 솔루션 기술지원(IBM Aspera 등), 웹 서비스 개발 및 솔루션 연동을 맡고 있습니다.',
    work: [
      'Go, React 기반 파일 관리 서비스 개발',
      'NestJS, React, Flutter 기반 AI 입찰 공고 분석 서비스 개발',
      'IBM Aspera Third-Party 웹 서비스 개발',
      'Proxmox, Docker 등 사내 가상화 환경 도입으로 잉여 자원 활용 및 테스트 환경 구축',
      'Proxmox 서버 5대로 클러스터를 구성하고 서비스, 사내, Kubernetes 용도로 VM 27대 운영',
      'Talos로 컨트롤 플레인 5대, 워커 5대의 Kubernetes 클러스터 구성',
      'Argo CD로 플랫폼과 서비스 Application 7개를 GitOps 방식으로 관리',
      'Vault와 Vault Secrets Operator로 비밀값을 Git 밖에서 관리',
      'Pacemaker 등을 사용한 서버, 서비스 HA 구성',
      '서비스 테스트 및 배포 파이프라인 구축',
      'GitHub Actions로 Pull Request마다 잡 22개가 도는 CI 구성(보안 검사, 프론트엔드 검사, 백엔드 테스트 6개 분할)',
      'GitHub Actions 릴리즈 워크플로 구성(검증, Harbor 이미지 빌드와 푸시, GitHub Release 발행)',
      'Prometheus, Grafana 등을 통한 모니터링 시스템 구축',
    ],
    stack: ['Go', 'React', 'PostgreSQL', 'IBM Aspera', 'Proxmox', 'Docker', 'Kubernetes', 'Talos', 'Argo CD', 'Vault', 'GitHub Actions', 'Harbor', 'Pacemaker', 'Prometheus', 'Grafana'],
    open: true,
  },
  {
    company: '원넷정보기술',
    badge: '2년 1개월',
    team: '금융센터팀 사원',
    period: '2017.12 – 2019.12',
    summary: '현대시멘트 단양공장, 영월공장, 한일시멘트 단양공장의 PC, IPT, 네트워크를 유지보수했습니다.',
    work: ['공장 현장의 PC 유지보수', 'IPT(IP 전화) 유지보수', '네트워크 유지보수'],
    stack: ['PC', 'IPT', 'N/W'],
    open: false,
  },
];

// ── 기술 ────────────────────────────────────────────────
// level: run = 직접 운영, used = 업무에 사용
// used: 기술을 눌렀을 때 나오는 설명, project: 연결할 프로젝트 id

export const levels = [
  { id: 'run', label: '직접 구축과 개발' },
  { id: 'used', label: '업무에 사용' },
] as const;

export type Skill = {
  name: string;
  level: 'run' | 'used';
  used?: string;
  project?: string;
};

export const skillGroups: { name: string; desc: string; skills: Skill[] }[] = [
  {
    name: '개발',
    desc: '화면부터 API 서버까지 웹 서비스를 개발하고 솔루션과 연동합니다.',
    skills: [
      { name: 'Go', level: 'run', used: 'API 서버와 리눅스 에이전트 개발', project: 'files' },
      { name: 'Gin', level: 'run', used: 'API 서버 개발', project: 'files' },
      { name: 'React', level: 'run', used: '서비스 화면 개발', project: 'files' },
      { name: 'TypeScript', level: 'run', used: '서비스 화면과 API 호출 코드', project: 'files' },
      { name: 'PostgreSQL', level: 'run', used: '서비스 데이터베이스, GORM 사용', project: 'files' },
      { name: 'OpenAPI', level: 'run', used: 'API 계약을 기준으로 서버와 화면 코드 생성', project: 'files' },
      { name: 'NestJS', level: 'run', used: 'API 서버와 백그라운드 작업 개발', project: 'bid' },
      { name: 'tRPC', level: 'run', used: '웹과 서버 사이의 API', project: 'bid' },
      { name: 'Prisma', level: 'run', used: 'PostgreSQL 모델 관리', project: 'bid' },
      { name: 'pgvector', level: 'run', used: '입찰 공고 후보 검색', project: 'bid' },
      { name: 'Flutter', level: 'run', used: '모바일 앱 개발', project: 'bid' },
      { name: 'AI API 연동', level: 'run', used: '로컬 AI 에이전트와 OpenAI 호환 API로 공고 분석', project: 'bid' },
      { name: 'JavaScript', level: 'used', used: '웹 서비스 개발' },
      { name: 'Node.js', level: 'used', used: '웹 서비스 개발' },
      { name: 'IBM Aspera', level: 'run', used: 'Third-Party 웹 서비스 개발, 솔루션 연동, 기술지원', project: 'aspera' },
    ],
  },
  {
    name: '컨테이너와 배포',
    desc: '컨테이너 환경을 만들고 배포를 자동화합니다.',
    skills: [
      { name: 'Docker', level: 'run', used: 'Docker VM 5대 운영', project: 'virtual' },
      { name: 'Kubernetes', level: 'run', used: '컨트롤 플레인 5대, 워커 5대 클러스터 구성', project: 'k8s' },
      { name: 'Talos', level: 'run', used: 'Kubernetes 노드 운영체제와 템플릿 구성', project: 'k8s' },
      { name: 'Argo CD', level: 'run', used: 'App of Apps로 Application 7개 관리', project: 'k8s' },
      { name: 'Helm, Kustomize', level: 'run', used: 'GitOps 저장소의 플랫폼과 서비스 구성', project: 'k8s' },
      { name: 'GitHub Actions', level: 'run', used: 'CI와 릴리즈 워크플로 구성', project: 'pipeline' },
      { name: 'Harbor', level: 'run', used: '릴리즈 때 컨테이너 이미지 빌드와 푸시', project: 'pipeline' },
      { name: 'Git Runner', level: 'run', used: 'Runner VM 2대 운영', project: 'pipeline' },
    ],
  },
  {
    name: '서버와 가상화',
    desc: '서버와 가상화 환경을 구축하고 이중화합니다.',
    skills: [
      { name: 'Proxmox', level: 'run', used: '서버 5대 클러스터, VM 27대 구성', project: 'virtual' },
      { name: 'Rocky Linux', level: 'run', used: 'Docker, 파일 전송, Runner VM과 템플릿 운영' },
      { name: 'CentOS', level: 'run', used: '파일 전송 VM 3대 운영' },
      { name: 'Pacemaker', level: 'run', used: '서버, 서비스 HA 구성', project: 'ha' },
      { name: 'Vault', level: 'run', used: 'Kubernetes 비밀값 관리, Vault Secrets Operator 연동', project: 'k8s' },
      { name: 'NFS', level: 'run', used: 'NFS provisioner와 모니터링 영구 볼륨', project: 'k8s' },
    ],
  },
  {
    name: '모니터링과 네트워크',
    desc: '서비스 상태를 살피고 네트워크를 관리합니다.',
    skills: [
      { name: 'Prometheus', level: 'run', used: '모니터링 시스템 구축', project: 'monitor' },
      { name: 'Grafana', level: 'run', used: '모니터링 시스템과 대시보드 구축', project: 'monitor' },
      { name: 'Loki, Alloy', level: 'run', used: 'Kubernetes 로그 수집', project: 'monitor' },
      { name: 'Traefik, MetalLB', level: 'run', used: 'Kubernetes 외부 접속 경로 구성', project: 'k8s' },
      { name: '네트워크 관리', level: 'run', used: '시스템 운영과 공장 현장 N/W 유지보수' },
      { name: 'IPT', level: 'used', used: '원넷정보기술 공장 현장 유지보수' },
    ],
  },
];

// ── GitOps ──────────────────────────────────────────────
// 실제 저장소 구성을 옮긴 내용입니다. 서비스명, 저장소 주소, 내부 IP와 도메인, 비밀값은 넣지 않습니다.
// 단계는 Argo CD sync wave 순서입니다.

export const gitops = {
  workflow: 'GitOps: Git을 기준으로 Argo CD가 동기화',
  facts: ['Application 7개', 'App of Apps', '자동 동기화와 Self Heal', '비밀값은 Vault에 보관', 'Talos 설정은 Git으로 이력 관리, 적용은 talosctl'],
  stages: [
    {
      title: 'Git 저장소',
      groups: [{ jobs: [{ name: 'Application 정의', time: '' }, { name: 'Kustomize 매니페스트', time: '' }, { name: 'Helm values', time: '' }] }],
    },
    {
      title: 'Argo CD',
      groups: [{ jobs: [{ name: 'Root Application', time: '' }] }],
    },
    {
      title: '저장소와 시크릿',
      groups: [
        { label: 'wave -2', jobs: [{ name: 'Vault', time: '' }, { name: 'NFS provisioner', time: '' }] },
        { label: 'wave -1', jobs: [{ name: 'Vault Secrets Operator', time: '' }] },
      ],
    },
    {
      title: '네트워크와 서비스',
      groups: [
        { label: '네트워크', jobs: [{ name: 'MetalLB', time: '' }, { name: 'Traefik', time: '2대' }] },
        {
          label: '파일 관리 서비스',
          jobs: [
            { name: 'frontend', time: '5대' },
            { name: 'backend', time: '5대' },
            { name: 'collaboration', time: '5대' },
            { name: 'OnlyOffice', time: '' },
            { name: 'PostgreSQL', time: '' },
            { name: 'Redis', time: '' },
          ],
        },
      ],
    },
    {
      title: '모니터링',
      groups: [
        {
          label: 'wave 1',
          jobs: [
            { name: 'Prometheus', time: '' },
            { name: 'Grafana', time: '' },
            { name: 'Loki', time: '' },
            { name: 'Alloy', time: '' },
            { name: 'Blackbox Exporter', time: '' },
          ],
        },
      ],
    },
  ],
};

// ── 대표 프로젝트 ───────────────────────────────────────
// 실제 프로젝트입니다. 서비스명, 저장소 주소, 내부 도메인, 계정 정보는 넣지 않습니다.

const fileService = {
  id: 'files',
  name: '파일 관리 서비스',
  action: { label: 'CI와 릴리즈 보기', href: '#ci' } as { label: string; href: string } | undefined,
  summary:
    '드라이브, 공유 링크, 메시지, 게시판, 고속 파일 전송을 한곳에서 쓰는 파일 관리 서비스입니다. 화면과 API 서버, 리눅스 에이전트, CI와 릴리즈까지 함께 만들고 있습니다.',
  archLabel: '브라우저 화면이 API 서버에 연결되고, API 서버가 데이터베이스, 파일 저장소, Aspera 서버와 에이전트에 연결되는 구조',
  layers: [
    {
      title: '화면',
      items: [{ name: 'React, TypeScript', sub: 'TanStack Query, Router, AG Grid, Tiptap, Storybook' }],
    },
    {
      title: 'API 서버',
      items: [{ name: 'Go, Gin', sub: 'OpenAPI 계약, JWT 세션, WebSocket. 화면과 함께 이미지 하나로 배포' }],
    },
    {
      title: '데이터와 저장소',
      items: [
        { name: 'PostgreSQL 18', sub: 'GORM, 마이그레이션' },
        { name: '파일 저장소', sub: '로컬 또는 S3 호환' },
      ],
    },
    {
      title: '전송 서버, API 서버와 연결',
      items: [
        { name: 'IBM Aspera Node API', sub: '고속 파일 전송' },
        { name: 'Go 에이전트', sub: '리눅스 서버에 설치, WebSocket으로 연결' },
      ],
    },
  ],
  features: [
    { name: '드라이브와 권한', body: '드라이브와 파일 탐색, 즐겨찾기, 사용자와 그룹 단위 권한 관리를 제공합니다.' },
    { name: '공유 링크', body: '외부 공유 링크를 만들고 비밀번호로 보호합니다. 접속과 전송 요청 이력은 감사 기록으로 남깁니다.' },
    { name: '메시지', body: 'WebSocket 기반 채팅과 첨부 파일, 메시지 통계를 제공합니다.' },
    { name: '게시판', body: '조직별 게시판과 글, 댓글을 제공하고 권한은 서버에서 현재 사용자 기준으로 검사합니다.' },
    { name: '파일 전송', body: 'IBM Aspera로 파일을 전송하고, 전송 모니터링과 저장소 통계, 서버 에이전트 관리를 제공합니다.' },
    { name: '계정과 보안', body: 'JWT 액세스 토큰과 회전형 리프레시 토큰을 HttpOnly 쿠키로 전달합니다. 다중 세션과 다단계 인증을 지원합니다.' },
    { name: '관리와 통계', body: '조직과 설정 관리, 감사, 사용 통계 화면을 제공합니다.' },
  ],
};

const bidService = {
  id: 'bid',
  name: 'AI 입찰 공고 분석 서비스',
  action: undefined,
  summary:
    '나라장터 입찰 공고를 수집하고 AI로 분석해 자사 제품, 용역, 기술과 맞는 공고를 찾아 주는 서비스입니다. 웹과 모바일 앱, API 서버를 함께 만들었습니다.',
  archLabel: '웹과 모바일 앱이 NestJS API 서버에 연결되고, API 서버가 PostgreSQL과 나라장터, AI에 연결되는 구조',
  layers: [
    {
      title: '화면',
      items: [
        { name: 'React, TypeScript', sub: 'Ant Design, TanStack Query, Router, Storybook' },
        { name: 'Flutter', sub: '모바일 앱, 푸시 알림' },
      ],
    },
    {
      title: 'API 서버',
      items: [{ name: 'NestJS, tRPC', sub: '수집 스케줄, 분석 작업 대기열, SSE 상태 갱신' }],
    },
    {
      title: '데이터',
      items: [{ name: 'PostgreSQL 17', sub: 'Prisma, pgvector' }],
    },
    {
      title: '외부 연동, API 서버와 연결',
      items: [
        { name: '나라장터 API', sub: '공공데이터포털 입찰 공고' },
        { name: 'AI', sub: '로컬 CLI 에이전트 또는 OpenAI 호환 API' },
        { name: 'Firebase, Google', sub: '소셜 로그인, 푸시 알림' },
      ],
    },
  ],
  features: [
    { name: '공고 수집', body: '나라장터 입찰 공고를 자동이나 수동으로 수집하고, 검색, 구분별 필터, 상세 정보, 첨부파일을 제공합니다.' },
    { name: 'AI 공고 분석', body: '로컬 AI 에이전트나 OpenAI 호환 API로 공고를 분석합니다. 분석 작업은 대기열로 처리하고 상태는 SSE로 갱신합니다.' },
    { name: '적합 공고 찾기', body: '자사 제품, 용역, 기술을 등록하면 pgvector로 후보 공고를 찾고 AI가 적합도를 평가합니다.' },
    { name: '소개 자료 생성', body: '브로슈어 템플릿을 올려 AI로 분석하고, 템플릿과 자사 아이템으로 PDF 소개 자료를 만듭니다.' },
    { name: '모바일과 알림', body: 'Flutter 앱에서 주요 화면을 쓰고 Firebase 푸시 알림을 받습니다.' },
    { name: '계정과 관리', body: 'JWT와 HttpOnly 쿠키 기반 로그인, Google 로그인, 관리자 계정 목록과 AI 실행 환경 설정을 제공합니다.' },
  ],
};

export const featured = [fileService, bidService];

// ── 프로젝트 ────────────────────────────────────────────
// demo: list = 항목 나열, ha = 서버 전환 버튼
// 데모는 동작을 보여 주는 예시이며 실제 실행 결과가 아닙니다.

export const projects = [
  {
    id: 'virtual',
    demo: 'list',
    win: 'Proxmox VE',
    lines: ['서버 5대 클러스터', 'VM 27대', 'VM 템플릿 5개'],
    title: 'Proxmox 가상화 클러스터',
    summary: '서버 5대를 클러스터로 묶고 서비스, 사내, Kubernetes 영역으로 나눠 VM 27대를 구성했습니다. 남는 자원을 활용하고 테스트 환경도 만들었습니다.',
    stack: ['Proxmox', 'Rocky Linux', 'CentOS', 'Docker'],
  },
  {
    id: 'k8s',
    demo: 'list',
    win: 'Kubernetes, Talos',
    lines: ['컨트롤 플레인 5대, 워커 5대', 'Argo CD Application 7개', 'Vault로 비밀값 분리', 'Traefik, MetalLB, NFS'],
    title: 'Talos Kubernetes와 GitOps',
    summary: 'Proxmox 위에 Talos로 Kubernetes 클러스터를 구성하고, 플랫폼과 서비스를 Argo CD로 관리합니다. 설치와 변경은 Git을 기준으로 자동 동기화됩니다.',
    stack: ['Kubernetes', 'Talos', 'Argo CD', 'Helm', 'Kustomize', 'Vault', 'Traefik', 'MetalLB'],
  },
  {
    id: 'aspera',
    demo: 'list',
    win: 'IBM Aspera',
    lines: ['Third-Party 웹 서비스 개발', '솔루션 연동', '솔루션 기술지원'],
    title: 'IBM Aspera 웹 서비스',
    summary: 'IBM Aspera Third-Party 웹 서비스를 개발하고 솔루션 연동과 기술지원을 맡았습니다.',
    stack: ['IBM Aspera', 'JavaScript', 'Node.js'],
  },
  {
    id: 'ha',
    demo: 'ha',
    win: 'Pacemaker, 동작 예시',
    lines: ['서버 1', '서버 2'],
    title: '서버와 서비스 HA 구성',
    summary: 'Pacemaker 등을 사용해 서버 한 대에 문제가 생겨도 서비스가 이어지도록 구성했습니다.',
    stack: ['Pacemaker', 'Linux'],
  },
  {
    id: 'pipeline',
    demo: 'list',
    win: 'GitHub Actions',
    lines: ['CI: Pull Request마다 잡 22개', '백엔드 테스트 6개로 분할', '릴리즈: 수동 실행, 잡 23개', 'Harbor 이미지 푸시', 'GitHub Release 발행'],
    title: 'GitHub Actions CI와 릴리즈',
    summary: 'main 대상 Pull Request를 올리면 변경 범위에 맞춰 보안 검사, 프론트엔드 검사, 백엔드 빌드와 테스트가 단계별로 돌고 마지막에 결과를 확인합니다. 오래 걸리는 백엔드 테스트는 6개로 나눠 병렬로 실행합니다. 릴리즈는 같은 검증을 거친 뒤 Harbor에 이미지를 올리고 GitHub Release를 발행합니다.',
    stack: ['GitHub Actions', 'Harbor', 'Git Runner'],
  },
  {
    id: 'monitor',
    demo: 'list',
    win: '모니터링',
    lines: ['지표 수집: Prometheus', '로그 수집: Loki, Alloy', '외부 점검: Blackbox Exporter', '화면 구성: Grafana'],
    title: '모니터링 시스템 구축',
    summary: 'Kubernetes의 지표와 로그를 모으고, 외부 서비스 상태와 인증서 만료를 Grafana 대시보드에서 확인합니다. Argo CD로 함께 관리합니다.',
    stack: ['Prometheus', 'Grafana', 'Loki', 'Alloy', 'Blackbox Exporter'],
  },
];

// ── 학력과 자격증 ───────────────────────────────────────

export const timeline = [
  { when: '2024.08', what: '컴퓨터공학과 졸업', where: '서울사이버대학교' },
  { when: '2018.12', what: '사무자동화산업기사', where: '한국산업인력공단' },
  { when: '2016.12', what: '정보처리기능사', where: '한국기술자격검정원' },
  { when: '2015.08', what: '워드프로세서 1급', where: '대한상공회의소' },
  { when: '2013.06', what: 'GTQ 2급', where: '한국생산성본부' },
  { when: '2013.06', what: '전산회계운용사 3급', where: '대한상공회의소' },
  { when: '2013.06', what: 'ITQ 한글엑셀', where: '한국생산성본부' },
  { when: '2012.12', what: 'ITQ 한글파워포인트', where: '한국생산성본부' },
  { when: '2012.06', what: 'ITQ 아래한글', where: '한국생산성본부' },
];
