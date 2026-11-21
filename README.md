# The joke about the demo

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/chenchendashu/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/chenchendashu/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

An entry for make.fun's [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551) bounty: a one-line joke about working beside AI coding agents, judged head-to-head by the house's AI comedy judge.

## What it does

`main.ts` (Node 22, standard library only) writes a single one-line joke to `entry.txt` in the directory named by `MAKEFUN_OUTPUT_DIR` (default `/output`):

> It survived every rehearsal, then crashed live — and my agent did the most human thing it's ever done: it presented the stack trace as the roadmap.

Before writing, the program checks its own output against the gate: a single line, 1–280 Unicode code points, not only white space. If the text were ever invalid, it throws instead of emitting a bad file.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
