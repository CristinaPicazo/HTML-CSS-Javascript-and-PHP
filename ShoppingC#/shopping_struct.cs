using System;

public class Prueba
{
	struct list
	{
		public string item;
		public int quantity;
		public double price;
		public double total_price;
	}
	
	public static void Main()
	{

		double total_quantity=0,total=0,total_sum=0;
		byte option;
		int total_items=0,delete;
		string find;
		bool obj_find = false;
		list[] shopping = new list[10];

		
		try{
			//================================= Menu =================================
			do{	
				Console.WriteLine("Menu:");
				Console.WriteLine("\t1 to add new item.");
				Console.WriteLine("\t2 to delete an item.");
				Console.WriteLine("\t3 to find an item.");
				Console.WriteLine("\t4 to show all the items");
				Console.WriteLine("\t5 to exit..");
				Console.Write("Number: ");
				option = Convert.ToByte(Console.ReadLine());
				Console.WriteLine();
			
			
			switch(option){	
				//================================= 1 add new item =================================
				case 1:
					for(int i = 0 ; i < total_items+1; i++){
						if(shopping[i].item == null){
							Console.Write("Item: ");
							shopping[i].item = Console.ReadLine();
							shopping[i].item = shopping[i].item.ToLower();
							total_items++;
							
							Console.Write("Quantity: ");
							shopping[i].quantity = Convert.ToInt32(Console.ReadLine());
							total_quantity += shopping[i].quantity;
							
							Console.Write("Price: ");
							shopping[i].price = Convert.ToDouble(Console.ReadLine());
							shopping[i].total_price = shopping[i].price * shopping[i].quantity;
							total_sum += shopping[i].total_price; 
							Console.WriteLine();
						break;
						}
					}
					break;
					
				//================================= 2 delete an item =================================
				case 2:
				if(total_items == 0 ){
					Console.WriteLine("There is no items in the list.");
				}else{
					do{
						for(int i = 0 ; i < total_items; i++){
							Console.WriteLine("{0} - Item: {1}",i+1,shopping[i].item);
						}						
						Console.WriteLine();
						
						Console.Write("Item to delete (number) or 0 to don't delete anything: ");
						delete = Convert.ToInt32(Console.ReadLine());
						Console.WriteLine();
						
					}while(delete > total_items || delete < 0);
						//0 to don't delete
						if(delete == 0){
							break;
						}
						
						//Inform item deleted
						Console.Write("Item to {0} deleted", shopping[delete-1].item);
						
						total_quantity -= shopping[delete].quantity;	
						shopping[delete].total_price = shopping[delete].price * shopping[delete].quantity;
						total_sum -= shopping[delete].total_price;
									
						for (int i = delete; i <= total_items; i++)
						{
							shopping[i-1].item = shopping[i].item;
							shopping[i-1].quantity = shopping[i].quantity;
							shopping[i-1].price = shopping[i].price;
						}
						total_items--;
					}
					
				Console.WriteLine();
					break;
					
				//================================= 3 find item =================================
				case 3:
					if(total_items == 0){
						Console.WriteLine("There is no items to find.");
					}else{
						Console.Write("Item to find: ");
						find = Console.ReadLine();
						Console.WriteLine();
						
						for(int i = 0; i < total_items; i++){
							if(find.ToLower() == shopping[i].item){
								obj_find = true;
								Console.WriteLine("Item {0} found in position {1}.",find.ToLower(),i+1);
								//show item
								Console.Write("{0} - ",i+1);
								Console.WriteLine("\tItem: \t\t{0}",shopping[i].item);
								Console.WriteLine("\tQuantity: \t{0}",shopping[i].quantity);
								Console.WriteLine("\tPrice: \t\t{0}",shopping[i].price.ToString("#.##"));
								Console.WriteLine("\t-------------------------");
								total = shopping[i].price * shopping[i].quantity;
								Console.WriteLine("\tTotal \t\t{0}",total.ToString("#.##"));
								Console.WriteLine();
							}
						}
						if (!obj_find){
							Console.WriteLine("Item not found.");
						}
					}
					
					Console.WriteLine();
					break;
				
				//================================= 4 show all the items =================================
				case 4:
					Console.Clear();
					Console.WriteLine("Shopping List:");
					Console.WriteLine("List of {0}, {1} items in your list for {2} pounds in total",total_items,total_quantity,total_sum.ToString("#.##"));
					Console.WriteLine();
					
					for(int i = 0 ; i < total_items; i++){		
						Console.Write("{0} - ",i+1);
						Console.WriteLine("\tItem: \t\t{0}",shopping[i].item);
						Console.WriteLine("\tQuantity: \t{0}",shopping[i].quantity);
						Console.WriteLine("\tPrice: \t\t{0}",shopping[i].price.ToString("#.##"));
						Console.WriteLine("\t-------------------------");
						total = shopping[i].price * shopping[i].quantity;
						Console.WriteLine("\tTotal \t\t{0}",total.ToString("#.##"));
						Console.WriteLine();
					}
					break;
					
				//================================= 5 exit =================================
				case 5:
					Console.WriteLine("End");
					Console.WriteLine();
					break;
					
				default:
					Console.WriteLine("Wrong number.");
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
