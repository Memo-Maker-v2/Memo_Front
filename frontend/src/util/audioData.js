const audioData = {
    title: "[10분 테코톡] 🧀 제리의 MVC 패턴",
    thumbnail_url : "https://cdn-icons-png.flaticon.com/512/1324/1324071.png",
    content: [
      {
        title: "🖍️ MVC 패턴 소개",
        text: `
          - 과거 프로그래머들의 유지보수 편의 위해 등장함.
          - 유지보수 용이 위해, 모델과 뷰가 아닌 컨트롤러 중간 단계 설계됨.
          - 유지보수 효율 위해, MBC 구조 탄생함.
          - MVC 패턴의 핵심은 유지보수 편의임.
          - 전체적인 MVC 구조 이해 후, 각 구성 요소 역할 숙지 필요함.
        `.split('.').map(sentence => sentence.trim()).filter(sentence => sentence)
      },
      {
        title: "😇 MVC 패턴의 특징",
        text: `
          - 사용자는 "코딩"으로 검색 시, 해당 업체의 코딩 결과를 요구함.
          - 컨트롤러는 해당 요청을 처리하여 결과를 뷰에게 전달함.
          - MVC의 주요 역할은 모델(컨트롤러), 뷰, 컨트롤러-뷰 관계 형성임.
          - 유지보수 편의 위한 MVC를 잘 구현하는 것이 중요함.
          - 모델은 컨트롤러와 뷰에 의존하지 않아야 함.
        `.split('.').map(sentence => sentence.trim()).filter(sentence => sentence)
      },
      {
        title: "🫧 MVC 패턴 준수 방법",
        text: `
          - 사용자의 달인 방식 따라 다르게 보여주어야 함.
          - 컨트롤러-뷰 관계에서는, 컨트롤러 의존 코드 금지됨.
          - 모델과 뷰 모두 컨트롤러 의존하면 안 됨.
          - 뷰는 모델에만 의존하고, 컨트롤러 의존 코드 없앰.
          - 사용자별 데이터 제공은 모델 메모리 변경 없이 가능해야 함.
        `.split('.').map(sentence => sentence.trim()).filter(sentence => sentence)
      },
      {
        title: "❓ MVC란 무엇인가?",
        text: `
          - MVC는 특정 상황(모델)에서 발생해야 하는 행동을 제어함.
          - MVC는 통제를 위한 도구이며, 유닛이나 컴포넌트의 상태를 관리함.
          - MVC를 만들기 위해서는 모델에 대한 깊은 이해와 악화 또는 모델에서 발생하지 않는 현상을 학습해야 함.
          - MVC는 유닛이나 컴포넌트의 성능 개선 및 문제 해결에 필수적임.
        `.split('.').map(sentence => sentence.trim()).filter(sentence => sentence)
      },
      {
        title: "🧩 MVC 적용 요령",
        text: `
          - MVC를 적용하려면 5가지 요령을 준수해야 함.
          - 본문을 기반으로 요령과 관련하여 이해하고 노력해야 함.
          - MVC는 계정 재발 방지, 에러 최소화 그리고 액세스 제어 등에 필요함.
          - 다양한 사용자가 다양한 요구사항을 충족하도록 MVC를 지원해야 함.
        `.split('.').map(sentence => sentence.trim()).filter(sentence => sentence)
      },
      {
        title: "🌀 실제 사례를 통한 MVC 이해",
        text: `
          - MVC의 실제 적용 예로는 '자동차 경주 게임'이 있음.
          - 이 게임에서는 사용자의 명령에 따라 자동차가 랜덤으로 움직임.
          - 움직임 정도는 아웃풋 뷰의 프린트 메소드에 의해 결정되며, 이를 MVC라고 함.
          - 이 때, 뷰는 사용자에 따라 다르게 보여줄 수 있지만, 출력 결과는 일관되어야 함.
          - 모델 내부에 뷰와 관련된 코드가 포함됨에 따른 문제점도 존재함.
        `.split('.').map(sentence => sentence.trim()).filter(sentence => sentence)
      }
    ]
  };
  
  export default audioData;
  