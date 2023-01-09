const config: Config = {
    mode: 'WORLD', // 'CHINA' | 'WORLD'
    botToken: '5789922931:AAGCpBO2aP8QIL7YdrfW4DJQbcG9M3DubJ4',
    keepFiles: {
        compared: true,
        input: true,
        single: true,
        video: true,
    },
    messages: {
        blocked: 'الموقع الصيني حظرنا خخخ♂️',
        bye:
            ' شكرا لاستخدام البوت 👍\n' +
            '',
        hello: 'هلا والله ارسلي الصورة حتى احولها الك',
        media: 'تريد تراسلني؟ تعال فيسبوك (طماطه بالدهن)',
        received: 'اصبر شويه',
    },
    sendMedia: {
        compared: true,
        single: true, // works only with mode=CHINA
        video: true, // works only with mode=CHINA
    },
    // proxyUrl: 'socks5://user:password@11.22.33.44:1234',
};

export default config;
