# Git Save Command Cheatsheet

_Automation shortcuts for common Git workflows_

---

## 📌 Custom Commands

### `gsavec "message"`
```bash
git add . && git commit -m "message"
```
➡️ Stages all files and commits them locally with your custom message.  
💡 Use this when you're not ready to push yet.

---

### `gsave "message"`
```bash
git add . && git commit -m "message" && git push
```
➡️ Stages, commits, and pushes your code in one step.  
💡 Use when you're done with a task and want to back it up to GitHub.

---

### `git push`
```bash
git push
```
➡️ Pushes the most recent commit to GitHub.  
💡 Use this if you already committed earlier using `gsavec`.

---

## 🧠 Tip:
Set these up in your `~/.bashrc`:
```bash
alias gsave='git add . && git commit -m'
alias gsavec='git add . && git commit -m'
```

---

_Last updated: 2025-04-17_

