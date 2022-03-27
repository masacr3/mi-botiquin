def expresionLogica ( literal ):
    cadena = ""

    for c in literal.split():
        ponerY = False
        for i in range(len(c)):
            atomic = c[i]
            if not ponerY : ponerY = True
            elif atomic == ")":
                print(") ", end="")
                continue
            else:
                print("and ", end="")
            
            if atomic == "(":
                print("( ", end="")
                ponerY = False
                continue

            if atomic == "-":
                print("not ", end="")
                ponerY = False
                continue

            if atomic == ")":
                print(") ", end="")
                ponerY = False
                continue
            
            if atomic == ".":
                print("and ", end="")
                ponerY = False
                continue

            exp = 'or' if atomic == '+' else atomic
            print("{} ".format(exp), end="")

expresion = "p-q + qs + rs"

expresionLogica(expresion)