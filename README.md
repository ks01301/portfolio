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
| 이름, 소개 문구, 이메일, 링크, 사진 | `profile` |
| 첫 화면 아래 요약 숫자 | `summary` |
| 구성도 노드 설명과 도구 | `nodes` (`id`는 그대로 두세요) |
| 경력 | `experience` |
| 기술과 숙련도, 사용처 | `skillGroups` |
| 프로젝트 | `projects` |
| 프로젝트 카드의 데모 내용 | `pipeline`, `plan`, `uptime`, `check` |
| 장애 기록 | `incidents` |
| 학력과 자격증 | `timeline` |

- 이력서는 `public/resume.pdf`로 넣으면 연결됩니다.
- 프로필 사진은 `public` 폴더에 넣고 `profile.photo`에 경로를 적으면 표시됩니다.
- 색과 서체는 `src/styles/site.css`의 `:root` 변수에서 바꿉니다. 글꼴 파일은 `src/layouts/Base.astro`에서 불러옵니다.
- 배포 주소가 정해지면 `astro.config.mjs`의 `site`를 수정하세요.
