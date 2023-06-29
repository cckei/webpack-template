module.exports = {
    "languages":
    {
        "en": "en-US",
        // "tc": "zh-HK",
        // "sc": "zh-CN"
    },
    "sitemap":
    {
        "index": {
            "template": "index"
        },
        "tv-and-audio": {
            "template": "product-listing",
            "sections": {
                "tv": {
                    "template": "product-details"
                },
                "laser-tv": {
                    "template": "product-details"
                },
                "sound-bar": {
                    "template": "product-details"
                }
            }
        },
        "about": {
            "template": "about",
            "sections": {
                "about-overview": {
                    "template": "about-overview"
                }
            }
        }
    }
}