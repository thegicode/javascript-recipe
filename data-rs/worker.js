onmessage = (e) => {
    console.log('2. [worker]메인스크립트의 데이터 가져오기')

    // 덧셈 계산
    const result = e.data[0] + e.data[1]

    console.log('3. [worker]메인스크립트 데이터 전송')
    postMessage(result)
}