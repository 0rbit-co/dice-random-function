local mod = {}
local json = require("json")

function mod.getNumber(msg)
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

    local res = Receive({ Action = "Receive-Response" }).Data;
    local finalRes = json.decode(res)

    mod.sendReply(msg.From, "GetNumber", {
        RandomNumber = finalRes[1]
    }, json.encode(finalRes[1]))
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
