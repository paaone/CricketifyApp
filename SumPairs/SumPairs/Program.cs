using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SumPairs
{
    class Program
    {
        static void Main(string[] args)
        {
            FindPairs(-51);
            DuplicateString("saimal");
            Console.ReadKey();
        }
        static void FindPairs(int num)
        {
            for (int i = -50; i <= 50; i++)
            {
                int otherNum = num - i;

                if (otherNum <= 50 && otherNum >= -50)
                {
                    Console.WriteLine(i + " " + otherNum);
                }
            }
        }

        static void DuplicateString(string s)
        {
            var linkedList = new LinkedList<int>();
            
            var charDict = new Dictionary<char, int>();            
            foreach(char c in s)
            {
                if (!charDict.ContainsKey(c))
                    charDict.Add(c, 1);
                else
                    Console.WriteLine(c + " is the first duplicate character in the string");
            }
        }
    }
}
