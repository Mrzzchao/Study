

function test() {
    let claimData = {
        "1": [
            {
                "ftime": "2019/03/28",
                "f_union_id": "wx_kd",
                "f_ext": 1,
                "audit_total_cnt": 25705,
                "audit_pass_rate": 0.359,
                "audit_pass_avg_ts": 373
            },
            {
                "ftime": "2019/03/29",
                "f_union_id": "wx_kd",
                "f_ext": 1,
                "audit_total_cnt": 20922,
                "audit_pass_rate": 0.296,
                "audit_pass_avg_ts": 351
            },
            {
                "ftime": "2019/03/30",
                "f_union_id": "wx_kd",
                "f_ext": 1,
                "audit_total_cnt": 19600,
                "audit_pass_rate": 0.297,
                "audit_pass_avg_ts": 360
            },
            {
                "ftime": "2019/03/31",
                "f_union_id": "wx_kd",
                "f_ext": 1,
                "audit_total_cnt": 20049,
                "audit_pass_rate": 0.312,
                "audit_pass_avg_ts": 332
            },
            {
                "ftime": "2019/04/01",
                "f_union_id": "wx_kd",
                "f_ext": 1,
                "audit_total_cnt": 23501,
                "audit_pass_rate": 0.287,
                "audit_pass_avg_ts": 248
            }
        ],
        "2": [
            {
                "ftime": "2019/03/28",
                "f_union_id": "wx_kd",
                "f_ext": 2,
                "audit_total_cnt": 25724,
                "audit_pass_rate": 0.312,
                "audit_pass_avg_ts": 420
            },
            {
                "ftime": "2019/03/29",
                "f_union_id": "wx_kd",
                "f_ext": 2,
                "audit_total_cnt": 21081,
                "audit_pass_rate": 0.239,
                "audit_pass_avg_ts": 419
            },
            {
                "ftime": "2019/03/30",
                "f_union_id": "wx_kd",
                "f_ext": 2,
                "audit_total_cnt": 19900,
                "audit_pass_rate": 0.228,
                "audit_pass_avg_ts": 431
            },
            {
                "ftime": "2019/03/31",
                "f_union_id": "wx_kd",
                "f_ext": 2,
                "audit_total_cnt": 20046,
                "audit_pass_rate": 0.241,
                "audit_pass_avg_ts": 409
            },
            {
                "ftime": "2019/04/01",
                "f_union_id": "wx_kd",
                "f_ext": 2,
                "audit_total_cnt": 24251,
                "audit_pass_rate": 0.217,
                "audit_pass_avg_ts": 345
            }
        ],
        "3": [
            {
                "ftime": "2019/03/28",
                "f_union_id": "wx_kd",
                "f_ext": 3,
                "audit_total_cnt": 57441,
                "audit_pass_rate": 0.332,
                "audit_pass_avg_ts": 197
            },
            {
                "ftime": "2019/03/29",
                "f_union_id": "wx_kd",
                "f_ext": 3,
                "audit_total_cnt": 57591,
                "audit_pass_rate": 0.319,
                "audit_pass_avg_ts": 359
            },
            {
                "ftime": "2019/03/30",
                "f_union_id": "wx_kd",
                "f_ext": 3,
                "audit_total_cnt": 39153,
                "audit_pass_rate": 0.292,
                "audit_pass_avg_ts": 381
            },
            {
                "ftime": "2019/03/31",
                "f_union_id": "wx_kd",
                "f_ext": 3,
                "audit_total_cnt": 40098,
                "audit_pass_rate": 0.304,
                "audit_pass_avg_ts": 331
            },
            {
                "ftime": "2019/04/01",
                "f_union_id": "wx_kd",
                "f_ext": 3,
                "audit_total_cnt": 46972,
                "audit_pass_rate": 0.286,
                "audit_pass_avg_ts": 244
            }
        ],
        "4": [
            {
                "ftime": "2019/03/30",
                "f_union_id": "wx_kd",
                "f_ext": 4,
                "audit_total_cnt": 18632,
                "audit_pass_rate": 0.377,
                "audit_pass_avg_ts": 158
            },
            {
                "ftime": "2019/03/31",
                "f_union_id": "wx_kd",
                "f_ext": 4,
                "audit_total_cnt": 19589,
                "audit_pass_rate": 0.362,
                "audit_pass_avg_ts": 180
            },
            {
                "ftime": "2019/04/01",
                "f_union_id": "wx_kd",
                "f_ext": 4,
                "audit_total_cnt": 23625,
                "audit_pass_rate": 0.364,
                "audit_pass_avg_ts": 108
            }
        ]
    };
    let daterange = {};
    const groups = [];
    let series = [];
    for (const key in claimData) {
        if (claimData.hasOwnProperty(key)) {
            groups.push(key + '组');
            claimData[key].forEach((item) => {      // 获取有数据日期
                daterange[item.ftime] = item.ftime
            });
        }
    }
    
    daterange = Object.keys(daterange).sort((a, b) => {
        return a - b
    })
    
    for (const key in claimData) {
        if (claimData.hasOwnProperty(key)) {    
            let seriesData = []
            claimData[key].forEach((item) => {
                const idx = daterange.indexOf(item.ftime)
                seriesData[idx] = item.audit_total_cnt
            })
            series.push({
                name: key + '组',
                type: 'bar',
                data: seriesData
            })
        }
    }
    
    
    console.log('data is:', claimData);
    console.log('groups is:', groups);
    console.log('series is:', series);
    console.log('daterange is:', daterange);
    
    
    
    return {
        title: {
            text: '分组审核量'
        },
        color: ['#003366', '#006699', '#4cabce', '#e5323e','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: groups
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: daterange
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: series
    };
}

let result = test()

console.log(JSON.stringify(result))