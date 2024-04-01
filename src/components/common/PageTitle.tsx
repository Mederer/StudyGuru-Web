interface PageTitleProps {
    title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
    return <h1>{title}</h1>;
}
