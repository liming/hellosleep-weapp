export const testData = {
  "version": 1,
  "data": [
    {
      "name": "basicinfo",
      "text": "基本信息",
      "page": "single",
      "data": [
        // {
        //   "name": "name",
        //   "text": "昵称",
        //   "type": "text",
        //   "placeHolder": "输入你的昵称"
        // },
        // {
        //   "name": "email",
        //   "text": "邮箱",
        //   "type": "email",
        //   "placeHolder": "输入你的邮箱"
        // },
        {
          "text": "生日",
          "name": "birthday",
          "type": "date",
          "options": {
            "type": "date",
            "start": "year",
            "initialDate": "1990-01"
          }
        },
        {
          "text": "性别",
          "name": "sex",
          "type": "radio",
          "data": [
            {
              "text": "男",
              "value": "male"
            },
            {
              "text": "女",
              "value": "female"
            }
          ]
        },
        {
          "text": "你的状态",
          "name": "status",
          "type": "select",
          "data": [
            {
              "text": "工作",
              "value": "work"
            },
            {
              "text": "上学",
              "value": "study"
            },
            {
              "text": "待业",
              "value": "unemployed"
            },
            {
              "text": "孕期",
              "value": "prenatal"
            },
            {
              "text": "产后",
              "value": "postnatal"
            },
            {
              "text": "退休",
              "value": "retire"
            }
          ]
        }
      ]
    },
    {
      "name": "sleephabit",
      "text": "睡眠相关",
      "page": "multiple",
      "data": [
        {
          "name": "sleepregular",
          "text": "你的作息时间规律吗？",
          "type": "radio",
          "data": [
            {
              "text": "规律",
              "value": "yes"
            },
            {
              "text": "不规律",
              "value": "no"
            }
          ]
        },
        {
          "name": "sleeptime",
          "text": "通常几点睡觉？",
          "placeHolder": "睡觉时间",
          "depends": {
            "question": "sleepregular",
            "value": "yes"
          },
          "type": "date",
          "options": {
            "type": "time"
          }
        },
        {
          "name": "getuptime",
          "text": "通常几点起床？",
          "placeHolder": "起床时间",
          "depends": {
            "question": "sleepregular",
            "value": "yes"
          },
          "type": "date",
          "options": {
            "type": "time"
          }
        },
        {
          "name": "hourstosleep",
          "text": "晚上试图睡觉时间有多少？",
          "depends": {
            "question": "sleepregular",
            "value": "no"
          },
          "type": "range",
          "options": {
            "min": 0,
            "max": 15,
            "start": 7,
            "unit": "小时"
          }
        },
        {
          "name": "hourstofallinsleep",
          "text": "晚上的实际睡眠时间有多少？",
          "type": "range",
          "options": {
            "min": 0,
            "max": 10,
            "start": 5,
            "unit": "小时"
          }
        },
        {
          "name": "hourstonoonnap",
          "text": "午睡时间多长？",
          "description": "这里指的是试图午睡的时间。",
          "type": "range",
          "options": {
            "min": 0,
            "max": 3,
            "start": 0,
            "step": 0.5,
            "unit": "小时"
          }
        },
        {
          "name": "noise",
          "text": "你的睡眠环境安静吗？",
          "type": "radio",
          "data": [
            {
              "text": "安静",
              "value": "yes"
            },
            {
              "text": "不安静",
              "value": "no"
            }
          ]
        },
        {
          "name": "noisereason",
          "depends": {
            "category": "sleephabit",
            "question": "noise",
            "value": "no"
          },
          "text": "影响睡眠环境的因素是什么？",
          "type": "radio",
          "data": [
            {
              "text": "伴侣打呼噜",
              "value": "snore"
            },
            {
              "text": "邻居吵闹",
              "value": "neighbour"
            },
            {
              "text": "室友吵闹",
              "value": "roommate"
            },
            {
              "text": "其他",
              "value": "others"
            }
          ]
        }
      ]
    },
    {
      "name": "liftstyle",
      "text": "生活状态",
      "page": "multiple",
      "data": [
        {
          "name": "sport",
          "text": "你会有规律的运动吗？",
          "type": "radio",
          "data": [
            {
              "text": "有规律",
              "value": "best"
            },
            {
              "text": "正常",
              "value": "normal"
            },
            {
              "text": "不多",
              "value": "little"
            },
            {
              "text": "不会",
              "value": "none"
            }
          ]
        },
        {
          "name": "sunshine",
          "text": "你是不是很少接触阳光？",
          "type": "radio",
          "data": [
            {
              "text": "很多",
              "value": "best"
            },
            {
              "text": "正常",
              "value": "normal"
            },
            {
              "text": "不多",
              "value": "little"
            },
            {
              "text": "几乎没有",
              "value": "none"
            }
          ]
        },
        {
          "name": "pressure",
          "text": "生活很有压力吗？",
          "type": "radio",
          "data": [
            {
              "text": "很大压力",
              "value": "best"
            },
            {
              "text": "正常",
              "value": "normal"
            },
            {
              "text": "很少",
              "value": "little"
            },
            {
              "text": "几乎没有",
              "value": "none"
            }
          ]
        },
        {
          "name": "lively",
          "text": "生活很丰富活跃吗？",
          "type": "radio",
          "data": [
            {
              "text": "非常",
              "value": "best"
            },
            {
              "text": "正常",
              "value": "normal"
            },
            {
              "text": "不太丰富",
              "value": "little"
            },
            {
              "text": "很枯燥",
              "value": "none"
            }
          ]
        },
        {
          "name": "bedroom",
          "text": "你总是长时间呆在卧室吗？",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "bed",
          "text": "你总是长时间呆在床上吗？（比如玩手机）",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        }
      ]
    },
    {
      "name": "working_study",
      "text": "工作状态",
      "page": "multiple",
      "data": [
        {
          "name": "distraction",
          "text": "你是不是很难专心工作（或学习）？",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "effeciency",
          "text": "你的工作（或学习）效率是不是很低？",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "unsociable",
          "text": "你是不是很少和同事（或同学）交流？",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "shiftwork",
          "text": "你的工作需要倒班吗？",
          "depends": {
            "question": "status",
            "value": "work"
          },
          "type": "radio",
          "data": [
            {
              "text": "需要",
              "value": "yes"
            },
            {
              "text": "不需要",
              "value": "no"
            }
          ]
        },
        {
          "name": "holiday",
          "text": "你的失眠发生在寒暑假吗",
          "depends": {
            "question": "status",
            "value": "study"
          },
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "bedtimeearly",
          "text": "你总是比室友睡得早吗？",
          "depends": {
            "question": "status",
            "value": "study"
          },
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        }
      ]
    },
    {
      "name": "attitude",
      "text": "对待失眠的方式",
      "page": "multiple",
      "data": [
        {
          "name": "irresponsible",
          "text": "失眠后你是不是刻意减少或者放弃工作/学习？",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "inactive",
          "text": "失眠后你是不是减少或放弃很多社交活动或者运动？",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "excessive_rest",
          "text": "失眠后你是不是总是在找机会休息？",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "complain",
          "text": "你会不会总是抱怨或者哭诉失眠",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "ignore",
          "text": "失眠后你是不是很少关心亲人和朋友？",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        },
        {
          "name": "medicine",
          "text": "你是不是去看病或者服用了安眠的药物？",
          "type": "radio",
          "data": [
            {
              "text": "是",
              "value": "yes"
            },
            {
              "text": "不是",
              "value": "no"
            }
          ]
        }
      ]
    }
  ],
  "tags": [
    {
      "name": "sleep_non_efficiency",
      "text": "睡眠效率低下",
      "calc": {
        "func": "calcSleepEfficiency",
        "input": [
          "sleeptime",
          "getuptime",
          "hourstosleep",
          "hourstofallinsleep"
        ]
      }
    },
    {
      "name": "getup_irregularly",
      "text": "无规律早起",
      "calc": {
        "question": "sleepregular",
        "value": "no"
      }
    },
    {
      "name": "sleep_exccessive",
      "text": "睡眠时间过长",
      "calc": {
        "func": "isSleepTooLong",
        "input": [
          "sleeptime",
          "getuptime",
          "hourstosleep",
          "hourstonoonnap"
        ]
      }
    },
    {
      "name": "neighbour_noise",
      "text": "邻居吵闹",
      "calc": {
        "question": "noisereason",
        "value": "neighbour"
      }
    },
    {
      "name": "roommate_noise",
      "text": "室友吵闹",
      "calc": {
        "question": "noisereason",
        "value": "roommate"
      }
    },
    {
      "name": "bedmate_snore",
      "text": "枕边人打鼾",
      "calc": {
        "question": "noisereason",
        "value": "snore"
      }
    },
    {
      "name": "unhealthy",
      "text": "不健康",
      "calc": {
        "func": "isHealthy",
        "input": [
          "sport",
          "sunshine"
        ]
      }
    },
    {
      "name": "idle",
      "text": "无所事事",
      "calc": {
        "func": "isIdle",
        "input": [
          "pressure",
          "lively"
        ]
      }
    },
    {
      "name": "presure",
      "text": "压力过大",
      "calc": {
        "question": "pressure",
        "value": "best"
      }
    },
    {
      "name": "boring",
      "text": "单调枯燥",
      "calc": {
        "question": "lively",
        "value": "none"
      }
    },
    {
      "name": "stimulation",
      "text": "应激反应",
      "calc": {
        "func": "isStimuli",
        "input": [
          "bedroom",
          "bed"
        ]
      }
    },
    {
      "name": "distraction",
      "text": "散乱",
      "calc": {
        "question": "distraction",
        "value": "yes"
      }
    },
    {
      "name": "unsociable",
      "text": "缺乏交流",
      "calc": {
        "question": "unsociable",
        "value": "yes"
      }
    },
    {
      "name": "shiftwork",
      "text": "倒班",
      "calc": {
        "question": "shiftwork",
        "value": "yes"
      }
    },
    {
      "name": "holiday",
      "text": "长假",
      "calc": {
        "question": "holiday",
        "value": "yes"
      }
    },
    {
      "name": "conflict_routine",
      "text": "作息不符",
      "calc": {
        "question": "bedtimeearly",
        "value": "yes"
      }
    },
    {
      "name": "prenatal",
      "text": "孕期",
      "calc": {
        "question": "prenatal",
        "value": "yes"
      }
    },
    {
      "name": "postnatal",
      "text": "产后",
      "calc": {
        "question": "postnatal",
        "value": "yes"
      }
    },
    {
      "name": "complain",
      "text": "抱怨",
      "calc": {
        "question": "complain",
        "value": "yes"
      }
    },
    {
      "name": "affectbyinsomnia",
      "text": "被失眠左右",
      "calc": {
        "func": "isAffected",
        "input": [
          "irresponsible",
          "inactive",
          "excessive_rest",
          "complain",
          "ignore",
          "medicine"
        ]
      }
    },
    {
      "name": "medicine",
      "text": "药物",
      "calc": {
        "question": "medicine",
        "value": "yes"
      }
    },
    {
      "name": "selfish",
      "text": "自我",
      "calc": {
        "question": "ignore",
        "value": "yes"
      }
    }
  ]
}