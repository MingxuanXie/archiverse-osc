use_osc "172.20.10.6", 57121
drum1 = "/fader1"
drum2 = "/fader2"
piano = "/fader3"

use_bpm 120

live_loop :drumcontrol1 do
  ##| stop
  osc drum1, [0, 1, 0 ,1, 0, 1, 0, 1].tick
  sleep 0.125
end

live_loop :drumcontrol2 do
  ##| stop
  osc drum2, [0, 1, 0 ,1, 0, 1, 0, 1].tick
  sleep 0.125 / 2
end

live_loop :piano do
  ##| stop
  use_random_seed 666
  4.times do
    osc piano, [1, 2, 3, 4].choose
    sleep 0.125 / 2
  end
end

live_loop :piano2 do
  ##| stop
  use_random_seed 123
  8.times do
    osc piano, [1, 2, 3, 4].reverse.tick
    sleep 0.125
  end
end
