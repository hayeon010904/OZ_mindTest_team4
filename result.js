const breadResult = [
    {
      breadType: "팥붕어빵",
      comment: "이것은 팥붕어빵 입니다. ",
    },
    {
      breadType: "슈붕어빵",
      comment: "이것은 슈붕어빵 입니다. ",
    },
    {
      breadType: "피자붕어빵",
      comment: "이것은 피자붕어빵 입니다. ",
    },
    {
      breadType: "녹두붕어빵",
      comment: "이것은 녹두붕어빵 입니다. ",
    },
    {
      breadType: "고구마붕어빵",
      comment: "이것은 고구마붕어빵 입니다. ",
    },
  ];
 
        let type = localStorage.getItem('breadtype')
        let resultImg = document.getElementById("bread-result-img");
        let resultContent = document.getElementById('bread-result-content')
        let resultInfo = document.getElementById('bread-result-info')
        console.log(breadResult[type].breadType);
        console.log(type)
        resultImg.attributes[1].value = `images/resultImg/bread_${type}.png`
        resultContent.textContent = breadResult[type].breadType
        resultInfo.textContent = breadResult[type].comment
