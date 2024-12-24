// COMPONENTS
import NewsDate from '../News/NewsDate';
import NewsSection from '../News/NewsSection';
// DATA
import newsData from '../News/newsPosts';
import { queryNews } from '@/database/getQueryOutput';

export default async function NewsPage() {

    const data = await queryNews();
    const arrData = Array.from(data).slice(0, 5);

    return (
        <div className='my-8 flex flex-col md:flex-row gap-x-10 px-4'>
            <div className='w-full order-2 md:order-1 md:w-3/4 flex h-fit flex-col gap-y-4 md:gap-y-8'>
                {arrData.map((element) => {
                    return (
                        <NewsSection
                            key={element.id}
                            title={element.title}
                            date={element.createdAt.toLocaleDateString('ru-ru')}
                            description={element.text}
                            full={true}
                        />
                    );
                })}
            </div>
            <div className='w-full order-1 md:order-2 md:w-1/4 flex flex-col'>
                <NewsDate />
            </div>
        </div>
    );
}
