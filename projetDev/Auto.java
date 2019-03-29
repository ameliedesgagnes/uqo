package projetDev;

public class Auto {

	private int arriveRP; /*nombre de nouvelles autos qui arrivent dans les entrées du rond-point(RP)
	                        excluant l'entrée provennant de la bretelle d'autoroute.*/
	private int arriveAU; /*nombre de nouvelles autos provennant de la bretelle d'autoroute.*/
	private int quitteRP; /*nombre d'autos qui quittent le rond-point(RP)
    					    excluant l'entrée provennant de la bretelle d'autoroute.*/
	private int quitteAU; /*nombre d'autos qui quittent le r(RP)
    						excluant l'entrée provennant de la bretelle d'autoroute.*/
	private int fileAttenteAU = 0; //nombre d'autos dans la file attente provenant de l'autoroute
	private int nbTotalAutoRP = 0; //nombre d'autos dans les entrées du rond-point
	
	private boolean feuRouge; //doit etre placé dans la classe feu
	
	private int genereAutoRP(String volumeTraf) { //utiliser un switch avec leger, moyen, dense
		arriveRP= (int)(Math.random()*8);
		return arriveRP;
	}
	
	private int genereAutoAU() {
		arriveAU = (int)(Math.random()*5);
		return arriveAU;
	}
	
	private int supprimeAutoRP() {
		
		quitteRP = 2;
		
		return quitteRP;
	}
	
	private int supprimeAutoAU() {
		
		quitteAU = 1;
		
		return quitteAU;
	}

	public static void main(String [] args) {
		
		Auto test = new Auto();

		//Rond-point
			test.setNbTotalAutoRP(0, test.getArriveRP(), test.getQuitteRP());
			int i = 0;
			
			System.out.println("Rond-point:");
			
			while(!test.feuRouge) {
				i++;
				test.setArriveRP(test.genereAutoRP());
				test.setQuitteRP(test.supprimeAutoRP());
				test.setNbTotalAutoRP(test.getNbTotalAutoRP(), test.getArriveRP(), test.getQuitteRP());
				
				if(test.getNbTotalAutoRP() < 0) {
					test.setNbTotalAutoRP(0,0,0);				
				}
				else if(test.getNbTotalAutoRP() >= 40) {
					test.feuRouge = true;
				}
			
			System.out.println(i + ": Arrive= " + test.getArriveRP() + " , Partie= " + test.getQuitteRP() + " , Total= " + test.getNbTotalAutoRP());
			}
			
		//Autoroute
			test.setFileAttenteAU(0, test.getArriveAU(), test.getQuitteAU());
			int a = 0;
			test.feuRouge = false;
			
			System.out.println("Autoroute:");
			
			while(!test.feuRouge) {
				a++;
				test.setArriveAU(test.genereAutoAU());
				test.setQuitteAU(test.supprimeAutoAU());
				test.setFileAttenteAU(test.getFileAttenteAU(), test.getArriveAU(), test.getQuitteAU());
				
				if(test.getFileAttenteAU() < 0) {
					test.setFileAttenteAU(0,0,0);				
				}
				else if(test.getFileAttenteAU() >= 20) {
					test.feuRouge = true;
				}
			
			System.out.println(a + ": Arrive= " + test.getArriveAU() + " , Partie= " + test.getQuitteAU() + " , Total= " + test.getFileAttenteAU());
			}
	}

	public int getArriveRP() {
		return arriveRP;
	}

	public void setArriveRP(int arriveRP) {
		this.arriveRP = arriveRP;
	}

	public int getArriveAU() {
		return arriveAU;
	}

	public void setArriveAU(int arriveAU) {
		this.arriveAU = arriveAU;
	}

	public int getQuitteRP() {
		return quitteRP;
	}

	public void setQuitteRP(int quitteRP) {
		this.quitteRP = quitteRP;
	}

	public int getQuitteAU() {
		return quitteAU;
	}

	public void setQuitteAU(int quitteAU) {
		this.quitteAU = quitteAU;
	}

	public int getFileAttenteAU() {
		return fileAttenteAU;
	}

	public void setFileAttenteAU(int fileAttenteAU, int arriveAU, int quitteAU) {
		this.fileAttenteAU = fileAttenteAU + arriveAU - quitteAU;
	}

	public int getNbTotalAutoRP() {
		return nbTotalAutoRP;
	}

	public void setNbTotalAutoRP(int nbTotalAutoRP, int arriveRP, int quitteRP) {
		this.nbTotalAutoRP = nbTotalAutoRP + arriveRP - quitteRP;
	}
	
	
}
