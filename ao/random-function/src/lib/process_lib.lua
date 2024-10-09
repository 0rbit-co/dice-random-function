local ao  = require "ao"
local mod = {}
local json = require("json")

function mod.getNumber(msg)
    mod.sendMessage({
        Target = _0RBT_TOKEN,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "GetNumber",
            Version = tostring(Version),
            Counter = tostring(Counter)
        },
        Data = tostring(Counter)
    })

    return Version
end

return mod
