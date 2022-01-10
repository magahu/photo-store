import { Injectable } from '@angular/core';
import { Preview } from './../../../preview.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosServiceService {
  previews: Preview[] = [
    {
      id: '1',
      title: 'Mariposa saltarina',
      square_size: '/assets/images/previews/wIMG_20200829_112213_047.jpg',
      full_size: '/assets/images/previews/wIMG_20200824_151335743.jpg',
      location: 'Cañon de Rio Blanco',
      description: 'Tomé esta foto en el mes de agosto del 2020 mientras caminaba por el jardín, había varias mariposas saltarinas que volaron lejos cuando me vieron, sólo una se quedó donde estaba y es la que aparece en esta foto. Las mariposas saltarinas abundan en la zona donde vivo desde finales de verano hasta otoño, incluso en invierno he visto revolotear algunas por ahí aunque son más escasas.',
      price: 2
    },
    {
      id: '2',
      title: 'Flores volcánicas',
      square_size: 'assets/images/previews/wIMG_20190908_212509_114.jpg',
      full_size: 'assets/images/previews/wIMG_20190908_133236419.jpg',
      location: 'Pico de Orizaba',
      description: 'Tomé esta foto en las faldas del Pico de Orizaba hace aproximádamente un año cuando fui a Villas Pico por una campaña de reforestación. Ese día no tuve oportunidad de recorrer demasiado los alrededores pues fue un viaje corto y la iluminación disminuye considerablemente después de medio día.  La cámara de mi celular no alcanzaba a captar todos los detalles así que tomé pocas fotos. Esta es una de mis favoritas de ese día.',
      price: 2
    },
    {
      id: '3',
      title: 'Mariposa pavoreal',
      square_size: 'assets/images/previews/wIMG_20200807_042347_681.jpg',
      full_size: 'assets/images/previews/wIMG_20200729_155340781.jpg',
      location: 'Cañon de Rio Blanco',
      description: 'Encontré a esta mariposa en las flores silvestres de un establo abandonado, tuve mucha suerte pues cuando iba pasando la mariposa se posó en la flor y se quedó unos momentos sin moverse, muchas de las mariposas que fotografió llegan a las flores cercanas a mí y se quedan tranquilas, supongo que no ven personas con frecuencia y todavía no tienen razones para asustarse cuando ven a una, esta es una de las ventajas de observar insectos en una zona poco poblada.',
      price: 2
    },
    {
      id: '4',
      title: 'Blanquita de la col',
      square_size: 'assets/images/previews/wIMG_20190917_182448_773.jpg',
      full_size: 'assets/images/previews/wIMG_20190912_155640208.jpg',
      location: 'Cañón de Río Blanco',
      description: 'Sorprendí a esta pequeña descansando (las mariposas no duermen) entre el pasto alto del jardín. En la tarde, justo después de que se  oculta el sol, las mariposas son menos activas. Si no están ocultas debajo de una hoja y tengo cuidado de no molestarlas, puedo conseguir fotos como esta pero tengo que hacerlo deprisa antes de que la luz escape completamente.',
      price: 2
    },
    {
      id: '5',
      title: 'Mariposa azufre',
      square_size: 'assets/images/previews/wIMG_20200905_100209_810.jpg',
      full_size: 'assets/images/previews/wIMG_20200728_142602498.jpg',
      location: 'Cañón de Río Blanco',
      description: 'En las flores de un balcón a finales de verano  encontré a esta mariposa. Su color despintado y opaco indica que es una mariposa que ha vivido mucho tiempo y sus alas rotas en la parte de atrás indican que algún insecto u otro depredador intentó capturarla alguna vez.',
      price: 2
    },
    {
      id: '6',
      title: 'Flores silvestres',
      square_size: 'assets/images/previews/wIMG_20191025_190439_063.jpg',
      full_size: 'assets/images/previews/wIMG_20191024_155232858.jpg',
      location: 'Cañón de Río Blanco',
      description: 'Un pequeño prado de flores a orillas de una banqueta es un ejemplo de que hay cosas hermosas escondidas en todas partes, incluso en lugares no tan bonitos, sólo hay que prestar atención para poder notarlas',
      price: 2
    },
    {
      id: '7',
      title: 'Mariposa organillo',
      square_size: 'assets/images/previews/wIMG_20191203_120626_026.jpg',
      full_size: 'assets/images/previews/wIMG_20191005_102452440_HDR.jpg',
      location: 'Orizaba',
      description: 'Una mariposa calentándose en el sol en un transitado puente de Orizaba. Orizaba es uno de los pueblos mágicos más populares del país que tiene un hermoso río zoológico y está bordeado por numerosos cerros por lo que no es raro encontrar mariposas u otros insectos en la cuidad, especialmente por las mañanas y en las cercanías de las jardineras y árboles.',
      price: 2
    },
    {
      id: '8',
      title: 'Mosquito',
      square_size: 'assets/images/previews/wIMG_20200912_082857_651.jpg',
      full_size: 'assets/images/previews/wIMG_20200824_160017292.jpg',
      location: 'Cañón de Río Blanco',
      description: 'Un mosquito comiendo polen de una pequeña flor en mi jardín. Estaba esperando una mariposa y apareció este mosquito, fue una foto bastante improvisada y no estaba segura de poder fotografiar algo tan pequeño pero la luz era buena y pude capturar algunos detalles de la escena y del pequeño mosquito como si hubiera usado una mejor cámara.',
      price: 2
    },
    {
      id: '9',
      title: 'Mariposa desconocida',
      square_size: 'assets/images/previews/wIMG_20200912_082857_651.jpg',
      full_size: 'assets/images/previews/wIMG_20200824_160017292.jpg',
      location: 'Cañon de Rio Blanco',
      description: 'Esta pequeña mariposa parecida a una saltarina pero un poco más grande, estaba descansando en una hoja de una silvestre en un terreno abandonado. Después de haber tomado la foto salió disparada hacia la maleza donde no podía seguirla.',
      price: 2
    },
    {
      id: '10',
      title: 'Colores de otoño',
      square_size: 'assets/images/previews/wIMG_20200912_082857_651.jpg',
      full_size: 'assets/images/previews/wIMG_20200824_160017292.jpg',
      location: 'Cañon de Rio Blanco',
      description: 'Varias semanas antes de que empiece el otoño, la naturaleza comienza a pintarse de otro color, es un proceso lento que muchas veces advetimos solo cuando ya es muy evidente pero incluso los insectos predominates de esta temporada ya están vestidos para la ocasión: es la temporada de las mariposas saltarinas.',
      price: 2
    },
    {
      id: '12',
      title: 'Gatita',
      square_size: 'assets/images/previews/wIMG_20200912_082857_651.jpg',
      full_size: 'assets/images/previews/wIMG_20200824_160017292.jpg',
      location: 'Cañon de Rio Blanco',
      description: 'Adopté a esta gatita hace algun tiempo, me acompañó incontables veces a ver las plantas e insectos y vivió feliz conmigo y con mi otra gata hasta que un año y medio después se enfermó irremediablemente. Mi pequeña descansa en el jardín donde tanto le gustaba jugar.',
      price: 2
    },
    {
      id: '10',
      title: 'Araña de jardín',
      square_size: 'assets/images/previews/wIMG_20200912_082857_651.jpg',
      full_size: 'assets/images/previews/wIMG_20200824_160017292.jpg',
      location: 'Cañon de Rio Blanco',
      description: 'Este tipo de arañas abundan en mi jardín durante dos meses al año en el verano, son arañas bastante tímidas, si me acerco mucho a ellas cambian su telaraña de lugar o incluso se van del jardín. Para tomar esta foto corrí un poco de riesgo porque tuve que acercarme mucho a su telaraña, por suerte le prestó más atención al grillo que estaba devorando.',
      price: 2
    },
    {
      id: '13',
      title: 'Mariposa',
      square_size: 'assets/images/previews/wIMG_20200912_082857_651.jpg',
      full_size: 'assets/images/previews/wIMG_20200824_160017292.jpg',
      location: 'Rio Orizaba',
      description: 'Descansando del ajetreo de la cuidad en una jardinera a las orillas del paseo del rio Orizaba estaba esta mariposa. Sus alas se veían muy blandas como las de las mariposas que tienen poco empo de haberlas extendido por primera vez.',
      price: 2
    },
    {
      id: '14',
      title: 'Mariposa',
      square_size: 'assets/images/previews/wIMG_20200912_082857_651.jpg',
      full_size: 'assets/images/previews/wIMG_20200824_160017292.jpg',
      location: 'Rio Orizaba',
      description: 'Descansando del ajetreo de la cuidad en una jardinera a las orillas del paseo del rio Orizaba estaba esta mariposa. Sus alas se veían muy blandas como las de las mariposas que tienen poco empo de haberlas extendido por primera vez.',
      price: 2
    },
  ];

  constructor() {}

  getAllPreviews() {
    return this.previews;
  }
  getPreview(id: string) {
    return this.previews.find(item => id === item.id);
  }
}
