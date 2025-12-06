import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import {Mail, Search} from "lucide-react"
const Photos = () => {
  const { openWindow } = useWindowStore();

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
          >
            <img src={item.icon} className="w-4" alt="item.title" />
            <p className="text=sm font-medium truncate">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
            <Mail className='icon' />
            <Search className='icon' />
        </div>
      </div>

      <div className="flex h-full">
        <div className="sidebar">
        <h2>Photos</h2>
          <ul>
          {renderList("", Object.values(photosLinks))}
          </ul>
        </div>
        <div className="gallery">
        <ul>
          {gallery.map(({id,img}) => (
            <li 
              key={id}
              onClick={()=>openWindow("imgfile",{
                id,
                name: "Gallery Image",
                icon: "/images/image.png",
                kind: "file",
                fileType: "img",
                imageUrl: img,
             })
            }
            >
              <img 
              src={img}
               />
            </li>
          ))}

        </ul>
        </div>
        </div>

    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
