const accessToken = '15373~EzoI5QS7QJMcIXXGkFC9lh8EYrOMADACcAHm3Ao2f2jgUf4wIKgdKH3pxjyru9Yu';
// const url = 

const url = 'https://usls.instructure.com/login/oauth2/auth?client_id=XXX&response_type=code&state=YYY&redirect_uri=https://example.com/oauth2response';

// async function checkAPI(){
//     let res = await fetch(`https://canvas.instructure.com/api/v1/courses?access_token=15373~2GCLqOolVNUz5hOwqNylKGcGVBSm764Cw4UOmOUAhfbUExUYMdxKh0x0NORuRoFa`
//     , {
//         method: 'GET',
//         mode: 'no-cors',}
//     //     headers: {
//     //         Authorization: `Bearer <${accessToken}>`
//     //     }
//     // }
//     )
//     let data = await res.json()
//     console.log(data)
// }

// checkAPI()

fetch('https://canvas.instructure.com/api/v1/courses?access_token=15373~2GCLqOolVNUz5hOwqNylKGcGVBSm764Cw4UOmOUAhfbUExUYMdxKh0x0NORuRoFa', {
    mode: 'no-cors'
})
  .then((response) => console.log(response))