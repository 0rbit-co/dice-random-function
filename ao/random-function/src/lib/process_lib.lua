local mod = {}
local json = require("json")
RANDOM_NUMBER = RANDOM_NUMBER or 0;

function mod.getNumber()
    mod.sendReply(
        _0RBT_POINTS,
        "Transfer",
        {
            Action = "Transfer",
            Recipient = _0RBIT,
            Quantity = FEE_AMOUNT,
            ["X-Url"] = BASE_URL,
            ["X-Action"] = "Get-Real-Data"
        },
        ""
    )
end

function mod.receiveNumber(msg)
    local res = json.decode(msg.Data)
    print(res[1])
    RANDOM_NUMBER = res[1]
    return RANDOM_NUMBER
end

function mod.sendReply(target, action, tags, data)
    Send({
        Target = target,
        ["Response-For"] = action,
        Tags = tags,
        Data = data
    })
end

return mod
