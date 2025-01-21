import sys
import json

def sum_numbers(a, b):
    return a + b

if __name__ == "__main__":
    # Lê os parâmetros passados pelo Electron
    data = json.loads(sys.stdin.read())
    a = data['a']
    b = data['b']

    # Faz a soma
    result = sum_numbers(a, b)

    # Retorna o resultado para o Electron
    print(json.dumps({"result": result}))
