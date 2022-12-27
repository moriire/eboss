def sum(iterable, start=0):
	"""Python builtin sum function look something like this\n and it takes 2 args\n\t 1. iterable\n\t 2.start with 0 default value\nSumming will start with the start argument and then through the values of the iterables """
	total = start #Summing will start with the start argument
	for i in iterable:
		total +=i#then through the values of the iterables
	return total

print(sum.__doc__)
num = [2, 3, 4, 5]
print(sum(num, 100))
#Answer: 114