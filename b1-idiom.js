const IDIOM_DATA = {
    "b1": {
        "1": [
            { "eng": "call on", "ch": "拜訪" },
            { "eng": "catch up", "ch": "趕上" },
            { "eng": "come over", "ch": "拜訪，來訪" },
            { "eng": "come up with", "ch": "想出" },
            { "eng": "give up", "ch": "放棄；戒絕" },
            { "eng": "in common", "ch": "共同的；共有的" },
            { "eng": "keep up", "ch": "(使)不停止；保持" },
            { "eng": "look over", "ch": "瀏覽" },
            { "eng": "result in", "ch": "導致…；結果是…" },
            { "eng": "take place", "ch": "發生；舉行" }
        ],
        "2": [
            { "eng": "appeal to", "ch": "懇請；訴諸；有吸引力；上訴" },
            { "eng": "figure out", "ch": "明白，理解" },
            { "eng": "go through", "ch": "經歷" },
            { "eng": "in advance", "ch": "預先，事先" },
            { "eng": "in contact with", "ch": "與…有聯繫" },
            { "eng": "in relation to", "ch": "關於" },
            { "eng": "instead of", "ch": "代替；不…而…" },
            { "eng": "on behalf of", "ch": "代表(某人)" },
            { "eng": "regardless of", "ch": "不管" },
            { "eng": "turn into", "ch": "變成" }
        ],
        "3": [
            { "eng": "at least", "ch": "至少" },
            { "eng": "get into difficulty", "ch": "遭遇困難，陷入困境" },
            { "eng": "go after", "ch": "跟隨；追逐；追求" },
            { "eng": "in case", "ch": "假使，萬一；以防，免得" },
            { "eng": "in particular", "ch": "特別地，尤其" },
            { "eng": "in return for", "ch": "作為…的回報" },
            { "eng": "in vain", "ch": "徒勞無功" },
            { "eng": "make fun of", "ch": "嘲弄，取笑" },
            { "eng": "on the spot", "ch": "當場，立刻；在現場" },
            { "eng": "take sth/sb for granted", "ch": "把…視為理所當然" }
        ],
        "4": [
            { "eng": "be out of the question", "ch": "不可能" },
            { "eng": "consist of sth", "ch": "由…組成" },
            { "eng": "on the whole", "ch": "一般說來，整體而言" },
            { "eng": "pass out", "ch": "昏倒" },
            { "eng": "run into sb", "ch": "偶然遇見(某人)" },
            { "eng": "run out of", "ch": "用完，耗盡" },
            { "eng": "stand by", "ch": "待命，準備行動" },
            { "eng": "stay up", "ch": "熬夜" },
            { "eng": "take off", "ch": "脫下(衣物)；(飛機)起飛" },
            { "eng": "turn on", "ch": "打開(開關、設備等)" }
        ],
        "5": [
            { "eng": "after all", "ch": "畢竟；終究" },
            { "eng": "as a result (of sth)", "ch": "由於，因此" },
            { "eng": "carry on", "ch": "繼續" },
            { "eng": "hand out", "ch": "分發" },
            { "eng": "in charge (of sth)", "ch": "負責" },
            { "eng": "in turn", "ch": "依次，輪流" },
            { "eng": "look up", "ch": "查閱，查詢" },
            { "eng": "on purpose", "ch": "故意地" },
            { "eng": "speak up", "ch": "提高音量" },
            { "eng": "up and down", "ch": "上上下下地；到處" }
        ],
        "6": [
            { "eng": "apart from", "ch": "除…之外" },
            { "eng": "break up", "ch": "分手，關係破裂；打碎" },
            { "eng": "by accident", "ch": "偶然地" },
            { "eng": "get rid of", "ch": "擺脫" },
            { "eng": "hang out", "ch": "逗留，閒蕩" },
            { "eng": "in a good mood", "ch": "心情愉快" },
            { "eng": "in spite of", "ch": "不論，儘管" },
            { "eng": "put... into practice", "ch": "實行" },
            { "eng": "put up with", "ch": "忍受" },
            { "eng": "set off", "ch": "出發，動身" }
        ],
        "7": [
            { "eng": "by the way", "ch": "順便一提" },
            { "eng": "by then", "ch": "到那時" },
            { "eng": "end up", "ch": "最後變成，以…告終" },
            { "eng": "give way to", "ch": "讓步；被…取代" },
            { "eng": "hold on", "ch": "繼續，堅持；不掛斷電話" },
            { "eng": "in honor of", "ch": "紀念…；向…致敬" },
            { "eng": "in search of", "ch": "追求，尋求" },
            { "eng": "make out", "ch": "理解；發現；填寫(表格等)" },
            { "eng": "relate to", "ch": "有關" },
            { "eng": "stand on your own feet", "ch": "靠自己獨立" }
        ],
        "8": [
            { "eng": "at fault", "ch": "有過錯，有責任" },
            { "eng": "because of", "ch": "由於…" },
            { "eng": "fall apart", "ch": "瓦解為碎塊，崩潰；崩潰" },
            { "eng": "hang up", "ch": "掛斷電話" },
            { "eng": "in no time", "ch": "很快，立即" },
            { "eng": "look after", "ch": "照顧，照料" },
            { "eng": "pay off", "ch": "償清；得到回報" },
            { "eng": "see eye to eye", "ch": "看法一致" },
            { "eng": "strike a balance", "ch": "達到平衡" },
            { "eng": "under no circumstances", "ch": "絕不" }
        ],
        "9": [
            { "eng": "at all", "ch": "一點也(不…)" },
            { "eng": "behind sb's back", "ch": "在…背後" },
            { "eng": "cope with", "ch": "應付" },
            { "eng": "for a while", "ch": "暫時" },
            { "eng": "live up to", "ch": "達到(標準)；履行(承諾)" },
            { "eng": "stand up for", "ch": "支持" },
            { "eng": "take over", "ch": "接管" },
            { "eng": "take part in", "ch": "參加" },
            { "eng": "take notice of", "ch": "注意到" },
            { "eng": "think over", "ch": "仔細考慮" }
        ],
        "10": [
            { "eng": "at last", "ch": "最後，終於" },
            { "eng": "at most", "ch": "至多" },
            { "eng": "at will", "ch": "隨心所欲地" },
            { "eng": "come across", "ch": "偶然遇見" },
            { "eng": "in control of", "ch": "管理，支配" },
            { "eng": "in trouble", "ch": "苦惱，處在困境" },
            { "eng": "make use of", "ch": "利用" },
            { "eng": "on account of", "ch": "因為，由於" },
            { "eng": "show off", "ch": "賣弄，炫耀" },
            { "eng": "with a view to", "ch": "為了做…" }
        ]
    }
};
