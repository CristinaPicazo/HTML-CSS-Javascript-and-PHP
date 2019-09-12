using System;

public class shopping
{
	
	public static void Main()
	{

		string[] name = new string[10];
		int option,total=10,position,count=0,rep=0,delete;
		string item;

		try{
			
			do{	
				Console.WriteLine("Menu:");
				Console.WriteLine("1 to add new item at the end.");
				Console.WriteLine("2 to insert new item in a specific position.");
				Console.WriteLine("3 to delete an item in a specific position");
				Console.WriteLine("4 to show all the items.");
				Console.WriteLine("5 to exit.");
				Console.Write("Number: ");
				option = Convert.ToInt32(Console.ReadLine());
				Console.WriteLine();
			
			
			switch(option){	
				case 1://add new item at the end
				
					if(count == total){
						Console.WriteLine("The list is full, please remove item, the maximum items are {0}.",total);
						Console.WriteLine();
					}else{				
						Console.Write("Item to insert: ");
						item = Console.ReadLine();
						Console.WriteLine();

						for(int i = 0; i < total; i++){
							if(name[i] == item){
								rep++;
							}
						}
						
						if(rep > 0){
							Console.WriteLine("The item {0} is already in the list.",item);
							Console.WriteLine();
							rep = 0;
						}else{
							for(int i = 0 ; i < total; i++){
								if(name[i] == null){
									Console.WriteLine("Item added.");
									name[i] = item;
									count++;
									Console.WriteLine();
									break;
								}
						
							}
						}
					}
					break;
					
				case 2://insert new item in a specific position
					if(count == total){
						Console.WriteLine("The list is full, please remove item, the maximum items are {0}.",total);
						Console.WriteLine();
					}else{				
						Console.Write("Item to insert: ");
						item = Console.ReadLine();
						Console.WriteLine();

						for(int i = 0; i < total; i++){
							if(name[i] == item){
								rep++;
							}
						}
						
						if(rep > 0){
							Console.WriteLine("The item {0} is already in the list.",item);
							Console.WriteLine();
							rep = 0;
						}else{
							do{
								Console.Write("Position: ");
								position = Convert.ToInt32(Console.ReadLine());
								Console.WriteLine();
								
								if(position > total){
									Console.WriteLine("The máximum position is {0}.",total);
									Console.WriteLine();
								}
							}while(position > total);
							if(name[position-1] == null){
								name[position-1] = item;
								Console.WriteLine("Item added.");
								Console.WriteLine();
								count++;
							}else{
								Console.WriteLine("{0} is in the position {1}. Please detete the item first.",name[position-1],position);	
								Console.WriteLine();							
							}
						}
					}
					
								
					break;
					
				case 3://delete an item in a specific position
					Console.Write("Position to delete:");
					delete = Convert.ToInt32(Console.ReadLine());
					delete -= 1;				
						Console.WriteLine("The item {0} has been deleted.",name[delete]);
						name[delete] = null;
						
					
					Console.WriteLine();
					break;
				
				case 4://show all the items
					for(int i = 0; i < total; i++){
						Console.WriteLine("{0} - {1}",i+1,name[i]);
					}
					Console.WriteLine();
					break;
				
				case 5://exit
					Console.WriteLine("You pressed exit");
					break;
				
				default://number outside the menu
					Console.WriteLine("Menu goes from 1 to 5. Number {0} is outside the range", option);
					Console.WriteLine();
					break;
			}
			}while(option != 5);
	
	}catch (Exception errorFind) //Not a number
		{ 
			Console.WriteLine("Error: {0}", errorFind.Message);
		}
	}
}
