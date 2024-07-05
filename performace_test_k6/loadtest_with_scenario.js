import http from 'k6/http';
import { check, group } from 'k6';

export const options = {
    scenarios: {
        shared_iter_scenario: {
            executor: "shared-iterations",
            vus: 10,
            iterations: 100,
            startTime: '0s'
        },
        per_vu_scenario: {
            executor: "per-vu-iterations",
            vus: 10,
            iterations: 10,
            startTime: '10s'
        },
        ramp_vus_scenario: {
            executor: "ramping-vus",
            stages: [
                {duration: '2s', target: 10},
                {duration: '10s', target: 10},
                {duration: '2s', target: 0}
            ],
            startTime: '20s'
        }
    }
}

export default function () {
    http.get('https://automationexercise.com/')
    // const res = http.get('https://automationexercise.com/')
    // if (__ENV.scenarios === 'shared_iter_scenario') {
    //     check(res, {
    //         'status is 200': (r) => r.status === 200
    //     })
    // }
    // if (__ENV.scenarios === 'per_vu_scenario') {
    //     check(res, {
    //         'status is 200': (r) => r.status === 200
    //     })
    // }
    // if(__ENV.scenarios === 'ramp_vus_scenario'){
    //     check(res, {
    //         'status is 200': (r) => r.status === 200
    //     })
    // }
    // group('shared_iter_scenario', () => {
    //     check(res, {
    //         'status is 200': (r) => r.status === 200
    //     })
    // })
    // group('per_vu_scenario', () => {
    //     check(res, {
    //         'status is 200': (r) => r.status === 200
    //     })
    // })

}