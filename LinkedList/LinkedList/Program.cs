using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkedList
{
    class Program
    {
        static void Main(string[] args)
        {
            Node first = new Node { value = 3 };

            Node middle = new Node { value = 7 };

            first.next = middle;

            Node last = new Node { value = 9 };

            middle.next = last;

            var nodeList = PrintList(first);
        }

        public static List<Node> PrintList(Node node)
        {
            var nodeList = new List<Node>();
            while ( node != null)
            {
                //Console.WriteLine(node.value);
                nodeList.Add(node);
                node = node.next;                
            }

            return nodeList;
        }
    }
}
