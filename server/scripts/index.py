def lint():
    import subprocess

    subprocess.run("pyright ./src && ruff check . && black . --check", shell=True)


def lint_fix():
    import subprocess

    subprocess.run("pyright ./src && ruff . --fix && black .", shell=True)


def start():
    import subprocess

    subprocess.run(
        "uvicorn src.main:app --reload --host 0.0.0.0 --port 8080 --loop asyncio",
        shell=True,
    )


def test():
    import subprocess

    subprocess.run("pytest . -xvrP --ff -k 'not run'", shell=True)


def tests():
    import subprocess

    subprocess.run("pytest . -xvrP --ff", shell=True)
