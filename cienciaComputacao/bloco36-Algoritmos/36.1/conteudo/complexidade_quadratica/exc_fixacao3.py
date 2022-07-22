def cubic_function(array1, array2, array3):
    number_of_iterations = 0
    result = []
    for number1 in array1:
        print(f'Array1: {number1}')

        for number2 in array2:
            print(f'Array2: {number2}')

            for number3 in array3:
                print(f'Array3: {number3}')
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f'{number_of_iterations} iterações')
    # print('result:', result)
    return result

n = 3
my_array = list(range(1, n + 1))
print('meu array:', my_array)

cubic_function(my_array, my_array, my_array)

# comando para ver tempo de execução:
# time python3 meu_programa.py