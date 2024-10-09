local process = require "lib.process_lib"

Version       = "0.0.1"

_0RBIT = "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ"
_0RBT_TOKEN = "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"

FEE_AMOUNT = "1000000000000" -- 1 $0RBT
BASE_URL = "http://www.randomnumberapi.com/api/v1.0/random?min=1&max=6&count=1"

ReceivedData = ReceivedData or {}

-- Handler to Get Random Number
Handlers.add("getNumber",
    Handlers.utils.hasMatchingTag("Action", "GetNumber"),
    process.getNumber
)



-- --[[
--     Handler to send 1 $0RBT and a GET request to the `0rbit` process.
-- ]]
-- Handlers.add(
--     "Get-Request",
--     Handlers.utils.hasMatchingTag("Action", "First-Get-Request"),
--     function(msg)
--         Send({
  
--         })
--         print(Colors.green .. "You have sent a GET Request to the 0rbit process.")
--     end
-- )

-- --[[
--     Handler to receive the data from the `0rbit` process.
-- ]]
-- Handlers.add(
--     "Receive-Data",
--     Handlers.utils.hasMatchingTag("Action", "Receive-Response"),
--     function(msg)
--         local res = json.decode(msg.Data)
--         ReceivedData = res
--         print(Colors.green .. "You have received the data from the 0rbit process.")
--     end
-- )