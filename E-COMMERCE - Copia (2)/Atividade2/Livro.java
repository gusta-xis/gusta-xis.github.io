package Atividade2;

public class Livro {
    private String titulo;
    private String autor;
    private int num;

    public Livro(String titulo, String autor, int num){
        this.titulo = titulo;
        this.autor= autor;
        this.num = num;
    }

    public void imprimirInfo(){
        System.out.println(titulo);
        System.out.println(autor);
        System.out.println(num);
    }

}