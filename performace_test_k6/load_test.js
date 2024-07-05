import http from 'k6/http';
import {check} from 'k6';

export const options = {
    stages: [
        {duration: '2s', target: 5},
        {duration: '10s', target: 5},
        {duration: '2s', target: 0},
    ],
    thresholds: {
        http_req_failed: [{threshold: 'rate<0.01', abortOnFail: true}],
        http_req_duration: ['p(95)<700'],
        'http_req_duration{status:200}': ['p(95)<700']
    }
}

export default function() {
    let res = http.batch([
        'https://automationexercise.com/',
        'https://automationexercise.com/login'
    ]);
    check(res, {
        'status is 200': res.status === 200,
    })
}