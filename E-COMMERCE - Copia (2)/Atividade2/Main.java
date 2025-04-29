package Atividade2;

public class Main {

    public static void main(String[] args) {
        String titulo = "Senhor dos aneis";
        String autor = "J.R.R Tolkien";
        int num = 1200;


        Livro l = new Livro(titulo, autor, num);

        l.imprimirInfo();
    }

}
