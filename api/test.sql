PGDMP         6                {            hamza    12.12    12.12 ?    g           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            h           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            i           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            j           1262    16426    hamza    DATABASE     �   CREATE DATABASE hamza WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United Kingdom.1252' LC_CTYPE = 'English_United Kingdom.1252';
    DROP DATABASE hamza;
                postgres    false            �            1259    16730    order    TABLE       CREATE TABLE public."order" (
    id integer NOT NULL,
    name text,
    "customerAddress" text,
    totalprice double precision DEFAULT '0'::double precision,
    "paymentState" text DEFAULT 'pending'::text,
    quantity double precision DEFAULT '0'::double precision,
    isdeleted boolean DEFAULT false,
    createdat timestamp with time zone,
    createdby integer,
    updatedat timestamp with time zone,
    updatedby integer,
    "saladId" integer,
    "schnitzelId" integer,
    "isDelivered" boolean DEFAULT false
);
    DROP TABLE public."order";
       public         heap    postgres    false            �            1259    16728    order_id_seq    SEQUENCE     �   CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.order_id_seq;
       public          postgres    false    213            k           0    0    order_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;
          public          postgres    false    212            �            1259    16427    pasta    TABLE     <  CREATE TABLE public.pasta (
    id integer NOT NULL,
    name text,
    description text,
    totalprice double precision DEFAULT '0'::double precision,
    isdeleted boolean DEFAULT false,
    createdat timestamp with time zone,
    updatedat timestamp with time zone,
    "orderId" integer,
    pictureurl text
);
    DROP TABLE public.pasta;
       public         heap    postgres    false            �            1259    16504    pasta_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pasta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.pasta_id_seq;
       public          postgres    false    202            l           0    0    pasta_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.pasta_id_seq OWNED BY public.pasta.id;
          public          postgres    false    211            �            1259    16454    pizza    TABLE     T  CREATE TABLE public.pizza (
    id integer NOT NULL,
    description text,
    createdat timestamp with time zone,
    updatedat timestamp with time zone,
    isdeleted boolean DEFAULT false,
    name text,
    totalprice double precision DEFAULT '0'::double precision,
    "orderId" integer,
    pictureurl text,
    "sizeidId" integer
);
    DROP TABLE public.pizza;
       public         heap    postgres    false            �            1259    16452    pizza_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pizza_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.pizza_id_seq;
       public          postgres    false    204            m           0    0    pizza_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.pizza_id_seq OWNED BY public.pizza.id;
          public          postgres    false    203            �            1259    16480    salat    TABLE     <  CREATE TABLE public.salat (
    id integer NOT NULL,
    name text,
    description text,
    isdeleted boolean DEFAULT false,
    createdat timestamp with time zone,
    updatedat timestamp with time zone,
    totalprice double precision DEFAULT '0'::double precision,
    pictureurl text,
    "orderId" integer
);
    DROP TABLE public.salat;
       public         heap    postgres    false            �            1259    16478    salat_id_seq    SEQUENCE     �   CREATE SEQUENCE public.salat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.salat_id_seq;
       public          postgres    false    208            n           0    0    salat_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.salat_id_seq OWNED BY public.salat.id;
          public          postgres    false    207            �            1259    16493 	   schnitzel    TABLE     X  CREATE TABLE public.schnitzel (
    id integer NOT NULL,
    name text,
    description text,
    isdeleted boolean DEFAULT false,
    createdat timestamp with time zone,
    updatedat timestamp with time zone,
    totalprice double precision DEFAULT '0'::double precision,
    pictureurl text,
    "sizeidId" integer,
    "orderId" integer
);
    DROP TABLE public.schnitzel;
       public         heap    postgres    false            �            1259    16491    schnitzel_id_seq    SEQUENCE     �   CREATE SEQUENCE public.schnitzel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.schnitzel_id_seq;
       public          postgres    false    210            o           0    0    schnitzel_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.schnitzel_id_seq OWNED BY public.schnitzel.id;
          public          postgres    false    209            �            1259    16976    size    TABLE     )  CREATE TABLE public.size (
    id integer NOT NULL,
    description text NOT NULL,
    isdeleted boolean DEFAULT false,
    createdat timestamp with time zone,
    createdby integer,
    updatedat timestamp with time zone,
    updatedby integer,
    name text NOT NULL,
    value text NOT NULL
);
    DROP TABLE public.size;
       public         heap    postgres    false            �            1259    16974    size_id_seq    SEQUENCE     �   CREATE SEQUENCE public.size_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.size_id_seq;
       public          postgres    false    215            p           0    0    size_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.size_id_seq OWNED BY public.size.id;
          public          postgres    false    214            �            1259    16467    snack    TABLE     T  CREATE TABLE public.snack (
    id integer NOT NULL,
    name text,
    description text,
    isdeleted boolean DEFAULT false,
    createdat timestamp with time zone,
    updatedat timestamp with time zone,
    totalprice double precision DEFAULT '0'::double precision,
    "orderId" integer,
    pictureurl text,
    "sizeidId" integer
);
    DROP TABLE public.snack;
       public         heap    postgres    false            �            1259    16465    snack_id_seq    SEQUENCE     �   CREATE SEQUENCE public.snack_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.snack_id_seq;
       public          postgres    false    206            q           0    0    snack_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.snack_id_seq OWNED BY public.snack.id;
          public          postgres    false    205            �
           2604    16733    order id    DEFAULT     f   ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);
 9   ALTER TABLE public."order" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213            �
           2604    16506    pasta id    DEFAULT     d   ALTER TABLE ONLY public.pasta ALTER COLUMN id SET DEFAULT nextval('public.pasta_id_seq'::regclass);
 7   ALTER TABLE public.pasta ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    202            �
           2604    16457    pizza id    DEFAULT     d   ALTER TABLE ONLY public.pizza ALTER COLUMN id SET DEFAULT nextval('public.pizza_id_seq'::regclass);
 7   ALTER TABLE public.pizza ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            �
           2604    16483    salat id    DEFAULT     d   ALTER TABLE ONLY public.salat ALTER COLUMN id SET DEFAULT nextval('public.salat_id_seq'::regclass);
 7   ALTER TABLE public.salat ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    208    208            �
           2604    16496    schnitzel id    DEFAULT     l   ALTER TABLE ONLY public.schnitzel ALTER COLUMN id SET DEFAULT nextval('public.schnitzel_id_seq'::regclass);
 ;   ALTER TABLE public.schnitzel ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �
           2604    16979    size id    DEFAULT     b   ALTER TABLE ONLY public.size ALTER COLUMN id SET DEFAULT nextval('public.size_id_seq'::regclass);
 6   ALTER TABLE public.size ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �
           2604    16470    snack id    DEFAULT     d   ALTER TABLE ONLY public.snack ALTER COLUMN id SET DEFAULT nextval('public.snack_id_seq'::regclass);
 7   ALTER TABLE public.snack ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    206    206            b          0    16730    order 
   TABLE DATA           �   COPY public."order" (id, name, "customerAddress", totalprice, "paymentState", quantity, isdeleted, createdat, createdby, updatedat, updatedby, "saladId", "schnitzelId", "isDelivered") FROM stdin;
    public          postgres    false    213   �N       W          0    16427    pasta 
   TABLE DATA           z   COPY public.pasta (id, name, description, totalprice, isdeleted, createdat, updatedat, "orderId", pictureurl) FROM stdin;
    public          postgres    false    202   CO       Y          0    16454    pizza 
   TABLE DATA           �   COPY public.pizza (id, description, createdat, updatedat, isdeleted, name, totalprice, "orderId", pictureurl, "sizeidId") FROM stdin;
    public          postgres    false    204   Q       ]          0    16480    salat 
   TABLE DATA           z   COPY public.salat (id, name, description, isdeleted, createdat, updatedat, totalprice, pictureurl, "orderId") FROM stdin;
    public          postgres    false    208   )T       _          0    16493 	   schnitzel 
   TABLE DATA           �   COPY public.schnitzel (id, name, description, isdeleted, createdat, updatedat, totalprice, pictureurl, "sizeidId", "orderId") FROM stdin;
    public          postgres    false    210   �U       d          0    16976    size 
   TABLE DATA           s   COPY public.size (id, description, isdeleted, createdat, createdby, updatedat, updatedby, name, value) FROM stdin;
    public          postgres    false    215   �V       [          0    16467    snack 
   TABLE DATA           �   COPY public.snack (id, name, description, isdeleted, createdat, updatedat, totalprice, "orderId", pictureurl, "sizeidId") FROM stdin;
    public          postgres    false    206   <W       r           0    0    order_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.order_id_seq', 1, true);
          public          postgres    false    212            s           0    0    pasta_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.pasta_id_seq', 20, true);
          public          postgres    false    211            t           0    0    pizza_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.pizza_id_seq', 43, true);
          public          postgres    false    203            u           0    0    salat_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.salat_id_seq', 8, true);
          public          postgres    false    207            v           0    0    schnitzel_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.schnitzel_id_seq', 17, true);
          public          postgres    false    209            w           0    0    size_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.size_id_seq', 3, true);
          public          postgres    false    214            x           0    0    snack_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.snack_id_seq', 16, true);
          public          postgres    false    205            �
           2606    16743 $   order PK_1031171c13130102495201e3e20 
   CONSTRAINT     f   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."order" DROP CONSTRAINT "PK_1031171c13130102495201e3e20";
       public            postgres    false    213            �
           2606    16490 $   salat PK_362376f44b6ee53008979580056 
   CONSTRAINT     d   ALTER TABLE ONLY public.salat
    ADD CONSTRAINT "PK_362376f44b6ee53008979580056" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.salat DROP CONSTRAINT "PK_362376f44b6ee53008979580056";
       public            postgres    false    208            �
           2606    16985 #   size PK_66e3a0111d969aa0e5f73855c7a 
   CONSTRAINT     c   ALTER TABLE ONLY public.size
    ADD CONSTRAINT "PK_66e3a0111d969aa0e5f73855c7a" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.size DROP CONSTRAINT "PK_66e3a0111d969aa0e5f73855c7a";
       public            postgres    false    215            �
           2606    16477 $   snack PK_786c53b7136bb6a5947fb5f88e8 
   CONSTRAINT     d   ALTER TABLE ONLY public.snack
    ADD CONSTRAINT "PK_786c53b7136bb6a5947fb5f88e8" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.snack DROP CONSTRAINT "PK_786c53b7136bb6a5947fb5f88e8";
       public            postgres    false    206            �
           2606    16503 (   schnitzel PK_ad2324f874c73fe63f768ac0696 
   CONSTRAINT     h   ALTER TABLE ONLY public.schnitzel
    ADD CONSTRAINT "PK_ad2324f874c73fe63f768ac0696" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.schnitzel DROP CONSTRAINT "PK_ad2324f874c73fe63f768ac0696";
       public            postgres    false    210            �
           2606    16464 $   pizza PK_cb1970bd1d17619fd6bc1ec7414 
   CONSTRAINT     d   ALTER TABLE ONLY public.pizza
    ADD CONSTRAINT "PK_cb1970bd1d17619fd6bc1ec7414" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.pizza DROP CONSTRAINT "PK_cb1970bd1d17619fd6bc1ec7414";
       public            postgres    false    204            �
           2606    16511 $   pasta PK_de46e897a4342b3faa0ab45e75d 
   CONSTRAINT     d   ALTER TABLE ONLY public.pasta
    ADD CONSTRAINT "PK_de46e897a4342b3faa0ab45e75d" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.pasta DROP CONSTRAINT "PK_de46e897a4342b3faa0ab45e75d";
       public            postgres    false    202            �
           2606    17071 $   pizza FK_180640aa5aa1557dd0105ebea50    FK CONSTRAINT     �   ALTER TABLE ONLY public.pizza
    ADD CONSTRAINT "FK_180640aa5aa1557dd0105ebea50" FOREIGN KEY ("sizeidId") REFERENCES public.size(id);
 P   ALTER TABLE ONLY public.pizza DROP CONSTRAINT "FK_180640aa5aa1557dd0105ebea50";
       public          postgres    false    2766    204    215            �
           2606    17041 $   salat FK_1d709a3ff2ada4926e44df1fe75    FK CONSTRAINT     �   ALTER TABLE ONLY public.salat
    ADD CONSTRAINT "FK_1d709a3ff2ada4926e44df1fe75" FOREIGN KEY ("orderId") REFERENCES public."order"(id);
 P   ALTER TABLE ONLY public.salat DROP CONSTRAINT "FK_1d709a3ff2ada4926e44df1fe75";
       public          postgres    false    213    208    2764            �
           2606    17051 (   schnitzel FK_217e4a8de77287d922a110092d0    FK CONSTRAINT     �   ALTER TABLE ONLY public.schnitzel
    ADD CONSTRAINT "FK_217e4a8de77287d922a110092d0" FOREIGN KEY ("orderId") REFERENCES public."order"(id);
 T   ALTER TABLE ONLY public.schnitzel DROP CONSTRAINT "FK_217e4a8de77287d922a110092d0";
       public          postgres    false    210    213    2764            �
           2606    17061 (   schnitzel FK_535f19acadcdadeced99667259b    FK CONSTRAINT     �   ALTER TABLE ONLY public.schnitzel
    ADD CONSTRAINT "FK_535f19acadcdadeced99667259b" FOREIGN KEY ("sizeidId") REFERENCES public.size(id);
 T   ALTER TABLE ONLY public.schnitzel DROP CONSTRAINT "FK_535f19acadcdadeced99667259b";
       public          postgres    false    210    2766    215            �
           2606    17015 $   order FK_582a6b3cf38b81c874288835147    FK CONSTRAINT     �   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "FK_582a6b3cf38b81c874288835147" FOREIGN KEY ("schnitzelId") REFERENCES public.schnitzel(id);
 R   ALTER TABLE ONLY public."order" DROP CONSTRAINT "FK_582a6b3cf38b81c874288835147";
       public          postgres    false    213    2762    210            �
           2606    17020 $   pasta FK_9317c4debc09095d0a04c2c2cf6    FK CONSTRAINT     �   ALTER TABLE ONLY public.pasta
    ADD CONSTRAINT "FK_9317c4debc09095d0a04c2c2cf6" FOREIGN KEY ("orderId") REFERENCES public."order"(id);
 P   ALTER TABLE ONLY public.pasta DROP CONSTRAINT "FK_9317c4debc09095d0a04c2c2cf6";
       public          postgres    false    2764    213    202            �
           2606    17005 $   snack FK_9fb40088e90f127e2397daa37f7    FK CONSTRAINT     �   ALTER TABLE ONLY public.snack
    ADD CONSTRAINT "FK_9fb40088e90f127e2397daa37f7" FOREIGN KEY ("orderId") REFERENCES public."order"(id);
 P   ALTER TABLE ONLY public.snack DROP CONSTRAINT "FK_9fb40088e90f127e2397daa37f7";
       public          postgres    false    206    213    2764            �
           2606    17000 $   pizza FK_a6ed27e50518a538dc9319d7848    FK CONSTRAINT     �   ALTER TABLE ONLY public.pizza
    ADD CONSTRAINT "FK_a6ed27e50518a538dc9319d7848" FOREIGN KEY ("orderId") REFERENCES public."order"(id);
 P   ALTER TABLE ONLY public.pizza DROP CONSTRAINT "FK_a6ed27e50518a538dc9319d7848";
       public          postgres    false    213    204    2764            �
           2606    17010 $   order FK_ec071f606748c85a61863111d78    FK CONSTRAINT     �   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "FK_ec071f606748c85a61863111d78" FOREIGN KEY ("saladId") REFERENCES public.salat(id);
 R   ALTER TABLE ONLY public."order" DROP CONSTRAINT "FK_ec071f606748c85a61863111d78";
       public          postgres    false    208    213    2760            �
           2606    17066 $   snack FK_eeffd3acdd2563030829b6fdc2b    FK CONSTRAINT     �   ALTER TABLE ONLY public.snack
    ADD CONSTRAINT "FK_eeffd3acdd2563030829b6fdc2b" FOREIGN KEY ("sizeidId") REFERENCES public.size(id);
 P   ALTER TABLE ONLY public.snack DROP CONSTRAINT "FK_eeffd3acdd2563030829b6fdc2b";
       public          postgres    false    215    206    2766            b   U   x�3���44P(�OLQH�/(�J�LM��4�,H�K��K��8���u�u���M����M���x%��QW� ֡>      W   �  x���Kn�0�5}
�k=hY��]��Y-�&h7��8���C )��O��].�v�zS$;3����+�߃�� {�ȷ=r���Cm�?X�����H����ל�c��,-ن��Y��D,�L��u^�E5_��M.�1}�����2�>m�%p���:��+�eF:��AY��N,��\��b�i4cBuR��X)��t�YIc�%���=XP)2��"��P�=�>��[��a������u}�G?�Ks�lsD%�Q��T�oz��&�d�vV�K�n�;w08���t�P�et>�u�ۨ��3���]�pu[���p6/�[�QK`�?��˻��F2��}ɮ�_�������\�����ٶ��~'r݃�3��c7�*4� ��?zQ7}	�飋*�1�3:9��������U�Q{�mG�
���J�(Q�|������t2�<���      Y   �  x���n�@���)�ױYl�Nnm���$u�����jc�x�Żn�<}���b]�Ӫ�śSO @?���g�Yp��[�(�߁!A���(�D�'lF�<��Of��4��7���ep:�Q���E��� ��4�áF3H��R���*����R<�
�pX�BA:���l2���Kr�;)�F���fJ�lpQ��� ���K�J��R�)�/r(Jʤ���s����Q��?��7{�3;AƓ�i�g�{�(�Mr�+���2��$TY�B?T2����w`u�|����^V��#�$�İuJM+�����VBy`kk2u� H9۶x�;��mw� 뮟�Z����d/��3�9L���r�ž�����,��άQ�a�I�&���ӣA�F}�-hr�1:��V���i��si�Ƿ��+��Me,%~����"�6��:{&O��ڒk2�4/���ֳm_*�V���BFJ�G��^�������`� ��TI�L�H�l|�D�}c�[�+�����l���S�,�zmbsiv��ʬ���_�r�c�]юgg�&�i���a�����ab������6���1���\C��K<�3md'�������(�Bt�K������n�u3�<'���	
S
ݪ�#gZ�a����6�q=���Hwkʟ��Al�D��-�QZD�������f �%��+̝���)/���Y��Qf|-�H�kt��y������|��Ą@�|f/�8luf�-��A�����=�      ]   G  x�͓�n�0�g����	dM�*C:T#�+p0�e�V�<}��X�P2t鐡O>������ʠ!u�PN���pT@5��(���fnn�d�&~���4y�?^s�#�cE�_21T���R��'�l�+L{���T�=\gi��&�]qjD/�|�t|vt�܁��	z=�rb�@�`�2��`�*���tF�ʙ��mDd������D�ՑUJ[鲅Zw_���?u��2����c�k����� ��S�k�t��\嘞A���Tt�1_<6hגz���\]?�n�.ƏZ����У��)o�}��G�����[���8�ԔcV      _   ;  x����N�0����)zo�q�1w>���7$丕�ڏ�u ���9g0K�xAI����g��n/]HaDM��\P���3��hhkr�(��B:G���	���ć1el
�4N��	��D���$�ҹ���a-� S�ͥ�zdV��}�J�tJ�������H���q���oe��U�H�n�����~�V�����2`�����nkw(��d��I�p-m#�ͻS3l��9�����.�T�''�j�WkЃ����AͿ�����oBfXwӉ��>w����僉��k��/���S��=������.��> d�%      d   a   x�3��M��Q(άJ�L�4202�50�5�P02�25�24ҳ05�03�60�4$(_2�Ӑˈ�75%�4�Z��M�4�2�t�L���I���\1z\\\ ��7�      [     x���=n�0�ٜ�{�ʚ1j��R	��q
6�G��қ�b�"e�X�{�����WΌx��p,��p���ث��Q+%��G,b�*�+�aQR$I��+˲����&a�v���\oBذj���f+ݑZEߎ]Md' �o��ə�<e4γ�6�2�J�O#��^5�4Ako�8xc�[�u`%e�I9#���T�4//�4(� ��c�X�
��[�
PF�ݷ��Z�{>	_Ъ�>_?kh)���X?8���}�YR�/�a�.���<�e     