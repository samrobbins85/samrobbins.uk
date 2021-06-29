import style from "./contactButton.module.css";

export default function ContactButton({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className={style.button}>
      Contact Me
    </a>
  );
}
