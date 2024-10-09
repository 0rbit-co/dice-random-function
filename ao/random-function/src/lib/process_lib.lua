local mod = {}

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
    local res = msg.Data

    return res[0]
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
