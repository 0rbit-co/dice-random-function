do
local _ENV = _ENV
package.preload[ "lib.process_lib" ] = function( ... ) local arg = _G.arg;
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
    print(res)


    mod.sendReply(msg.From, "GetNumber", {
        RandomNumber = res[0]
    }, json.encode(res))
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
end
end

local process = require "lib.process_lib"

Version       = "0.0.1"
_0RBIT        = "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ"
_0RBT_POINTS  = "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"

FEE_AMOUNT    = "1000000000000" -- 1 $0RBT
BASE_URL      = "http://www.randomnumberapi.com/api/v1.0/random?min=1&max=6&count=1"


-- Handler to Get Random Number
Handlers.add("getNumber",
    Handlers.utils.hasMatchingTag("Action", "GetNumber"),
    process.getNumber
)
