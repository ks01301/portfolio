# portfolio

Astro로 만든 개인 포트폴리오입니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist 폴더에 정적 파일 생성
```

## 내용 수정

화면에 보이는 글은 모두 `src/data/site.ts` 한 파일에 있습니다.

| 항목 | 위치 |
| --- | --- |
| 이름, 소개 문구, 이메일 | `profile` |
| 첫 화면 아래 하는 일 카드 | `focus` |
| 인프라 구성도, CI, 릴리즈, GitOps 구성 | `infra`, `infraTags`, `ci`, `release`, `gitops` |
| 경력 | `experience` |
| 기술과 숙련도, 사용처 | `skillGroups` |
| 대표 프로젝트 | `fileService`, `bidService`, `featured` |
| 프로젝트와 카드 데모 내용 | `projects` |
| 학력과 자격증 | `timeline` |

- 색과 서체는 `src/styles/site.css`의 `:root` 변수에서 바꿉니다. 글꼴 파일은 `src/layouts/Base.astro`에서 불러옵니다.
- 배포 주소가 정해지면 `astro.config.mjs`의 `site`를 수정하세요.
